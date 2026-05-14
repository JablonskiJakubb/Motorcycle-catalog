import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MotorsService } from './motors.service';
import { CreateMotorDto } from './dto/create-motor.dto';
import { Motor } from './entities/motor.entity';

@ApiTags('motors')
@Controller('motors')
export class MotorsController {
  constructor(private readonly motorsService: MotorsService) { }

  @Get()
  @ApiOperation({ summary: 'Lista wszystkich motocykli' })
  @ApiResponse({ status: 200, type: Motor, isArray: true })
  findAll() {
    return this.motorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz motocykl po ID' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 200, type: Motor })
  @ApiResponse({ status: 404, description: 'Nie znaleziono' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.motorsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Dodaj nowy motocykl' })
  @ApiResponse({ status: 201, type: Motor })
  @ApiResponse({ status: 400, description: 'Błąd walidacji' })
  create(@Body() createMotorDto: CreateMotorDto) {
    return this.motorsService.create(createMotorDto);
  }
}