import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInvoiceDto, PayInvoiceDto } from './dto/billing.dto';
import { TransactionType } from '@prisma/client';

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}

  async createInvoice(userId: string, createInvoiceDto: CreateInvoiceDto) {
    // Calculate due date (30 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);

    const invoice = await this.prisma.invoice.create({
      data: {
        userId,
        serverId: createInvoiceDto.serverId,
        amount: createInvoiceDto.amount,
        dueDate,
        status: 'DRAFT',
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        server: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return invoice;
  }

  async getInvoices(userId: string, role: string) {
    const where = role === 'ADMIN' ? {} : { userId };

    return this.prisma.invoice.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        server: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getInvoiceById(invoiceId: string, userId: string, role: string) {
    const where = role === 'ADMIN' 
      ? { id: invoiceId }
      : { id: invoiceId, userId };

    const invoice = await this.prisma.invoice.findFirst({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        server: {
          select: {
            id: true,
            name: true,
          },
        },
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    return invoice;
  }

  async payInvoice(invoiceId: string, userId: string, payInvoiceDto: PayInvoiceDto) {
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        userId,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    if (invoice.status === 'PAID') {
      throw new BadRequestException('Invoice already paid');
    }

    // Get current balance
    const lastTransaction = await this.prisma.transaction.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    const currentBalance = lastTransaction?.balance || 0;

    if (currentBalance < invoice.amount) {
      throw new BadRequestException('Insufficient balance');
    }

    // Double-entry ledger: Debit transaction
    const debitTransaction = await this.prisma.transaction.create({
      data: {
        userId,
        invoiceId,
        type: TransactionType.DEBIT,
        amount: invoice.amount,
        balance: currentBalance - invoice.amount,
        description: `Payment for invoice ${invoiceId}`,
        metadata: {
          paymentMethod: payInvoiceDto.paymentMethod,
          stripePaymentIntentId: payInvoiceDto.stripePaymentIntentId,
        },
      },
    });

    // Update invoice status
    const updatedInvoice = await this.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        status: 'PAID',
        paidAt: new Date(),
        stripePaymentIntentId: payInvoiceDto.stripePaymentIntentId,
      },
    });

    return {
      invoice: updatedInvoice,
      transaction: debitTransaction,
    };
  }

  async addCredit(userId: string, amount: number, description: string, metadata?: any) {
    // Get current balance
    const lastTransaction = await this.prisma.transaction.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    const currentBalance = lastTransaction?.balance || 0;
    const newBalance = currentBalance + amount;

    // Double-entry ledger: Credit transaction
    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        type: TransactionType.CREDIT,
        amount,
        balance: newBalance,
        description,
        metadata: metadata || {},
      },
    });

    return transaction;
  }

  async getTransactions(userId: string, role: string) {
    const where = role === 'ADMIN' ? {} : { userId };

    return this.prisma.transaction.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        invoice: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getBalance(userId: string) {
    const lastTransaction = await this.prisma.transaction.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return {
      balance: lastTransaction?.balance || 0,
      lastTransaction: lastTransaction?.createdAt || null,
    };
  }
}

