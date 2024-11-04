import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiquorModule } from './liquor/liquor.module';
import { envs } from './config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { options } from 'joi';
import { BookingModule } from './booking/booking.module';

@Module({
  imports:[BookingModule, LiquorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
