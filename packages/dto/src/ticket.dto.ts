import { z } from 'zod';

export const TicketStatusSchema = z.enum([
  'OPEN',
  'IN_PROGRESS',
  'RESOLVED',
  'CLOSED',
]);

export const TicketPrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);

export const CreateTicketDtoSchema = z.object({
  subject: z.string().min(1).max(200),
  description: z.string().min(1),
  priority: TicketPrioritySchema.optional(),
});

export const TicketDtoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  assignedToId: z.string().uuid().nullable(),
  subject: z.string(),
  description: z.string(),
  status: TicketStatusSchema,
  priority: TicketPrioritySchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  resolvedAt: z.date().nullable(),
});

export type CreateTicketDto = z.infer<typeof CreateTicketDtoSchema>;
export type TicketDto = z.infer<typeof TicketDtoSchema>;

