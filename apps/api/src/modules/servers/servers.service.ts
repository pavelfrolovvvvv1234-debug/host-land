import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { CreateServerDto } from './dto/servers.dto';
import { ServerStatus } from '@prisma/client';

@Injectable()
export class ServersService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('server-provisioning') private serverQueue: Queue,
  ) {}

  async createServer(userId: string, createServerDto: CreateServerDto) {
    const server = await this.prisma.server.create({
      data: {
        userId,
        name: createServerDto.name,
        status: ServerStatus.PENDING,
        specs: createServerDto.specs,
      },
    });

    // Add to queue for provisioning
    await this.serverQueue.add('provision-server', {
      serverId: server.id,
      userId,
      specs: createServerDto.specs,
    });

    return server;
  }

  async getServers(userId: string, role: string) {
    const where = role === 'ADMIN' ? {} : { userId };

    return this.prisma.server.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getServerById(serverId: string, userId: string, role: string) {
    const where = role === 'ADMIN' 
      ? { id: serverId }
      : { id: serverId, userId };

    const server = await this.prisma.server.findFirst({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!server) {
      throw new NotFoundException('Server not found');
    }

    return server;
  }

  async suspendServer(serverId: string, userId: string, role: string) {
    const server = await this.getServerById(serverId, userId, role);

    if (server.status !== ServerStatus.ACTIVE) {
      throw new Error('Server is not active');
    }

    // Add to queue for suspension
    await this.serverQueue.add('suspend-server', {
      serverId: server.id,
      externalId: server.externalId,
    });

    const updated = await this.prisma.server.update({
      where: { id: serverId },
      data: { status: ServerStatus.SUSPENDED },
    });

    return updated;
  }

  async terminateServer(serverId: string, userId: string, role: string) {
    const server = await this.getServerById(serverId, userId, role);

    // Add to queue for termination
    await this.serverQueue.add('terminate-server', {
      serverId: server.id,
      externalId: server.externalId,
    });

    const updated = await this.prisma.server.update({
      where: { id: serverId },
      data: { status: ServerStatus.TERMINATED },
    });

    return updated;
  }
}

