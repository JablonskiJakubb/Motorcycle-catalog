import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMotorDto } from './dto/create-motor.dto';
import { UpdateMotorDto } from './dto/update-motor.dto';
import { Motor } from './entities/motor.entity';

@Injectable()
export class MotorsService {
  constructor(
    @InjectRepository(Motor)
    private readonly motorRepository: Repository<Motor>,
  ) {}

  async create(createMotorDto: CreateMotorDto): Promise<Motor> {
    const motor = this.motorRepository.create(createMotorDto);
    return await this.motorRepository.save(motor);
  }

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

  async update(id: number, updateMotorDto: UpdateMotorDto): Promise<Motor> {
    const motor = await this.findOne(id);
    const updatedMotor = this.motorRepository.merge(motor, updateMotorDto);
    return await this.motorRepository.save(updatedMotor);
  }

  async remove(id: number): Promise<void> {
    const motor = await this.findOne(id);
    await this.motorRepository.remove(motor);
  }
}
