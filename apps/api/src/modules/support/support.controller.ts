import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SupportService } from './support.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/support.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('support')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post('tickets')
  @HttpCode(HttpStatus.CREATED)
  async createTicket(
    @CurrentUser() user: any,
    @Body() createTicketDto: CreateTicketDto,
  ) {
    return this.supportService.createTicket(user.id, createTicketDto);
  }

  @Get('tickets')
  async getTickets(@CurrentUser() user: any) {
    return this.supportService.getTickets(user.id, user.role);
  }

  @Get('tickets/:id')
  async getTicketById(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.supportService.getTicketById(id, user.id, user.role);
  }

  @Put('tickets/:id')
  @HttpCode(HttpStatus.OK)
  async updateTicket(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return this.supportService.updateTicket(id, user.id, user.role, updateTicketDto);
  }

  @Post('tickets/:id/close')
  @HttpCode(HttpStatus.OK)
  async closeTicket(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.supportService.closeTicket(id, user.id, user.role);
  }
}

