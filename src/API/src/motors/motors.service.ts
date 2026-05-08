import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Motor } from './entities/motor.entity';
import { CreateMotorDto } from './dto/create-motor.dto';

@Injectable()
export class MotorsService {
  constructor(
    @InjectRepository(Motor)
    private readonly motorRepository: Repository<Motor>,
  ) {}


  async findAll(): Promise<Motor[]> {
    return await this.motorRepository.find();
  }

  async findOne(id: number): Promise<Motor> {
    const motor = await this.motorRepository.findOne({ where: { id } });
    if (!motor) {
      throw new NotFoundException(`Motor with ID ${id} not found`);
    }
    return motor;
  }

  async create(createMotorDto: CreateMotorDto): Promise<Motor> {
    const motor = this.motorRepository.create(createMotorDto);
    return await this.motorRepository.save(motor);
  }
}
