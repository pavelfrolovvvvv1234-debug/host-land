import { z } from 'zod';

export const LoginDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const RegisterDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export const RefreshTokenDtoSchema = z.object({
  refreshToken: z.string(),
});

export type LoginDto = z.infer<typeof LoginDtoSchema>;
export type RegisterDto = z.infer<typeof RegisterDtoSchema>;
export type RefreshTokenDto = z.infer<typeof RefreshTokenDtoSchema>;

