import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotorsService } from './motors.service';
import { MotorsController } from './motors.controller';
import { Motor } from './entities/motor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Motor])],
  controllers: [MotorsController],
  providers: [MotorsService],
  exports: [MotorsService],
})
export class MotorsModule {}
