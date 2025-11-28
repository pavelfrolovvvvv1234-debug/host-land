import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { ServerStatus } from '@prisma/client';
import { Logger } from '@nestjs/common';

@Processor('server-provisioning')
export class ServerProcessor extends WorkerHost {
  private readonly logger = new Logger(ServerProcessor.name);

  constructor(private prisma: PrismaService) {
    super();
  }

  async process(job: Job<any>): Promise<any> {
    this.logger.log(`Processing job ${job.id} of type ${job.name}`);

    try {
      switch (job.name) {
        case 'provision-server':
          return await this.provisionServer(job.data);
        case 'suspend-server':
          return await this.suspendServer(job.data);
        case 'terminate-server':
          return await this.terminateServer(job.data);
        default:
          throw new Error(`Unknown job type: ${job.name}`);
      }
    } catch (error) {
      this.logger.error(`Job ${job.id} failed:`, error);
      throw error;
    }
  }

  private async provisionServer(data: { serverId: string; userId: string; specs: any }) {
    this.logger.log(`Provisioning server ${data.serverId}`);

    // Update status to PROVISIONING
    await this.prisma.server.update({
      where: { id: data.serverId },
      data: { status: ServerStatus.PROVISIONING },
    });

    // Mock external API call to Pterodactyl/Proxmox
    // In production, this would make actual API calls
    await this.mockExternalApiCall('create', data.specs);

    // Simulate provisioning delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate mock external ID
    const externalId = `ext-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Update server with external ID and set to ACTIVE
    const server = await this.prisma.server.update({
      where: { id: data.serverId },
      data: {
        status: ServerStatus.ACTIVE,
        externalId,
        ipAddress: this.generateMockIP(),
      },
    });

    this.logger.log(`Server ${data.serverId} provisioned successfully`);
    return server;
  }

  private async suspendServer(data: { serverId: string; externalId: string | null }) {
    this.logger.log(`Suspending server ${data.serverId}`);

    if (!data.externalId) {
      throw new Error('Server has no external ID');
    }

    // Mock external API call
    await this.mockExternalApiCall('suspend', { externalId: data.externalId });

    const server = await this.prisma.server.update({
      where: { id: data.serverId },
      data: { status: ServerStatus.SUSPENDED },
    });

    this.logger.log(`Server ${data.serverId} suspended successfully`);
    return server;
  }

  private async terminateServer(data: { serverId: string; externalId: string | null }) {
    this.logger.log(`Terminating server ${data.serverId}`);

    if (!data.externalId) {
      throw new Error('Server has no external ID');
    }

    // Mock external API call
    await this.mockExternalApiCall('terminate', { externalId: data.externalId });

    const server = await this.prisma.server.update({
      where: { id: data.serverId },
      data: { status: ServerStatus.TERMINATED },
    });

    this.logger.log(`Server ${data.serverId} terminated successfully`);
    return server;
  }

  private async mockExternalApiCall(action: string, data: any): Promise<void> {
    // Mock API call - in production, this would call Pterodactyl/Proxmox API
    this.logger.log(`Mock API call: ${action}`, data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  private generateMockIP(): string {
    return `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  }
}

