import { IsString, IsInt, IsNotEmpty, Min, IsOptional, MaxLength } from 'class-validator';

export class CreateMotorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsInt()
  @Min(1885)
  year: number;

  @IsInt()
  @Min(0)
  engineCapacity: number;

  @IsInt()
  @Min(0)
  power: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
