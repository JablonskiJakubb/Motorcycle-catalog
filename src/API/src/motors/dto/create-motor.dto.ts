import { IsString, IsInt, IsNotEmpty, Min, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMotorDto {
  @ApiProperty({ example: 'Yamaha MT-07', description: 'Pełna nazwa motocykla' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Yamaha' })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({ example: 'MT-07' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ example: 2021, minimum: 1885, description: 'Rok produkcji' })
  @IsInt()
  @Min(1885)
  year: number;

  @ApiProperty({ example: 689, minimum: 0, description: 'Pojemność silnika w cm³' })
  @IsInt()
  @Min(0)
  engineCapacity: number;

  @ApiProperty({ example: 75, minimum: 0, description: 'Moc w KM' })
  @IsInt()
  @Min(0)
  power: number;

  @ApiProperty({ example: 'naked', description: 'Typ motocykla (naked, sport, enduro...)' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiPropertyOptional({ example: 'Świetny motocykl do miasta i tras.', maxLength: 1000 })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @ApiPropertyOptional({ example: 'https://example.com/mt07.jpg' })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}