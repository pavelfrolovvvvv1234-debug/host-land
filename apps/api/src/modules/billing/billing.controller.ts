import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateInvoiceDto, PayInvoiceDto, AddCreditDto } from './dto/billing.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('billing')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('invoices')
  @HttpCode(HttpStatus.CREATED)
  async createInvoice(
    @CurrentUser() user: any,
    @Body() createInvoiceDto: CreateInvoiceDto,
  ) {
    return this.billingService.createInvoice(user.id, createInvoiceDto);
  }

  @Get('invoices')
  async getInvoices(@CurrentUser() user: any) {
    return this.billingService.getInvoices(user.id, user.role);
  }

  @Get('invoices/:id')
  async getInvoiceById(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.billingService.getInvoiceById(id, user.id, user.role);
  }

  @Post('invoices/:id/pay')
  @HttpCode(HttpStatus.OK)
  async payInvoice(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() payInvoiceDto: PayInvoiceDto,
  ) {
    return this.billingService.payInvoice(id, user.id, payInvoiceDto);
  }

  @Post('credits')
  @Roles('ADMIN')
  @HttpCode(HttpStatus.CREATED)
  async addCredit(
    @Body() addCreditDto: AddCreditDto,
    @CurrentUser() user: any,
  ) {
    // Admin can add credit to any user, but for now we'll use current user
    // In production, you'd want to add a userId parameter
    return this.billingService.addCredit(
      user.id,
      addCreditDto.amount,
      addCreditDto.description,
      addCreditDto.metadata,
    );
  }

  @Get('transactions')
  async getTransactions(@CurrentUser() user: any) {
    return this.billingService.getTransactions(user.id, user.role);
  }

  @Get('balance')
  async getBalance(@CurrentUser() user: any) {
    return this.billingService.getBalance(user.id);
  }
}

