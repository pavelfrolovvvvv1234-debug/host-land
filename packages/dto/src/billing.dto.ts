import { z } from 'zod';

export const InvoiceStatusSchema = z.enum([
  'DRAFT',
  'PENDING',
  'PAID',
  'OVERDUE',
  'CANCELLED',
  'REFUNDED',
]);

export const TransactionTypeSchema = z.enum(['CREDIT', 'DEBIT']);

export const InvoiceDtoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  serverId: z.string().uuid().nullable(),
  amount: z.number(),
  status: InvoiceStatusSchema,
  dueDate: z.date(),
  paidAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TransactionDtoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  invoiceId: z.string().uuid().nullable(),
  type: TransactionTypeSchema,
  amount: z.number(),
  balance: z.number(),
  description: z.string(),
  metadata: z.record(z.unknown()).nullable(),
  createdAt: z.date(),
});

export type InvoiceDto = z.infer<typeof InvoiceDtoSchema>;
export type TransactionDto = z.infer<typeof TransactionDtoSchema>;

