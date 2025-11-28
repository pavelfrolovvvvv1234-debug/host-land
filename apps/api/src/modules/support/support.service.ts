import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/support.dto';
import { TicketStatus, TicketPriority } from '@prisma/client';

@Injectable()
export class SupportService {
  constructor(private prisma: PrismaService) {}

  async createTicket(userId: string, createTicketDto: CreateTicketDto) {
    const ticket = await this.prisma.ticket.create({
      data: {
        userId,
        subject: createTicketDto.subject,
        description: createTicketDto.description,
        priority: createTicketDto.priority || TicketPriority.MEDIUM,
        status: TicketStatus.OPEN,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return ticket;
  }

  async getTickets(userId: string, role: string) {
    const where = role === 'ADMIN' || role === 'SUPPORT'
      ? {}
      : { userId };

    return this.prisma.ticket.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getTicketById(ticketId: string, userId: string, role: string) {
    const where = role === 'ADMIN' || role === 'SUPPORT'
      ? { id: ticketId }
      : { id: ticketId, userId };

    const ticket = await this.prisma.ticket.findFirst({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    return ticket;
  }

  async updateTicket(
    ticketId: string,
    userId: string,
    role: string,
    updateTicketDto: UpdateTicketDto,
  ) {
    const ticket = await this.getTicketById(ticketId, userId, role);

    // Only admins and support can assign tickets
    if (updateTicketDto.assignedToId && role !== 'ADMIN' && role !== 'SUPPORT') {
      throw new Error('Only admins and support can assign tickets');
    }

    const updateData: any = {};

    if (updateTicketDto.status) {
      updateData.status = updateTicketDto.status;
      if (updateTicketDto.status === TicketStatus.RESOLVED) {
        updateData.resolvedAt = new Date();
      }
    }

    if (updateTicketDto.priority) {
      updateData.priority = updateTicketDto.priority;
    }

    if (updateTicketDto.assignedToId) {
      updateData.assignedToId = updateTicketDto.assignedToId;
    }

    if (updateTicketDto.subject) {
      updateData.subject = updateTicketDto.subject;
    }

    if (updateTicketDto.description) {
      updateData.description = updateTicketDto.description;
    }

    const updated = await this.prisma.ticket.update({
      where: { id: ticketId },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return updated;
  }

  async closeTicket(ticketId: string, userId: string, role: string) {
    const ticket = await this.getTicketById(ticketId, userId, role);

    const updated = await this.prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: TicketStatus.CLOSED,
      },
    });

    return updated;
  }
}

