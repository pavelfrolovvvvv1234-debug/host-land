import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { ServersService } from './servers.service';
import { CreateServerDto } from './dto/servers.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('servers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ServersController {
  constructor(private readonly serversService: ServersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createServer(
    @CurrentUser() user: any,
    @Body() createServerDto: CreateServerDto,
  ) {
    return this.serversService.createServer(user.id, createServerDto);
  }

  @Get()
  async getServers(@CurrentUser() user: any) {
    return this.serversService.getServers(user.id, user.role);
  }

  @Get(':id')
  async getServerById(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.serversService.getServerById(id, user.id, user.role);
  }

  @Post(':id/suspend')
  @HttpCode(HttpStatus.OK)
  async suspendServer(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.serversService.suspendServer(id, user.id, user.role);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async terminateServer(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.serversService.terminateServer(id, user.id, user.role);
  }
}

