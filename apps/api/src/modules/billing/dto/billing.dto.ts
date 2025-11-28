import { IsNumber, IsString, IsOptional, IsUUID, Min } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsOptional()
  @IsUUID()
  serverId?: string;
}

export class PayInvoiceDto {
  @IsString()
  paymentMethod: string;

  @IsOptional()
  @IsString()
  stripePaymentIntentId?: string;
}

export class AddCreditDto {
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  description: string;

  @IsOptional()
  metadata?: any;
}

