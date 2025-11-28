import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ServersService } from './servers.service';
import { ServersController } from './servers.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ServerProcessor } from './server.processor';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: 'server-provisioning',
    }),
  ],
  controllers: [ServersController],
  providers: [ServersService, ServerProcessor],
  exports: [ServersService],
})
export class ServersModule {}

