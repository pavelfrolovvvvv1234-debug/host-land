import { z } from 'zod';

export const ServerStatusSchema = z.enum([
  'PENDING',
  'PROVISIONING',
  'ACTIVE',
  'SUSPENDED',
  'TERMINATED',
  'ERROR',
]);

export const CreateServerDtoSchema = z.object({
  name: z.string().min(1).max(100),
  specs: z.record(z.unknown()),
});

export const ServerDtoSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  name: z.string(),
  status: ServerStatusSchema,
  externalId: z.string().nullable(),
  specs: z.record(z.unknown()),
  ipAddress: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CreateServerDto = z.infer<typeof CreateServerDtoSchema>;
export type ServerDto = z.infer<typeof ServerDtoSchema>;

