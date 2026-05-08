import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MotorsService } from './motors.service';
import { CreateMotorDto } from './dto/create-motor.dto';


@Controller('motors')
export class MotorsController {
  constructor(private readonly motorsService: MotorsService) {}


  @Get()
  findAll() {
    return this.motorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.motorsService.findOne(id);
  }

  @Post()
  create(@Body() createMotorDto: CreateMotorDto) {
    return this.motorsService.create(createMotorDto);
  }
}
