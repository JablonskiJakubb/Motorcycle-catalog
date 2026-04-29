import { IsString, IsInt, IsOptional, IsUrl, Min, Max } from 'class-validator';

export class CreateMotorDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year: number;

  @IsInt()
  @Min(0)
  engineCapacity: number;

  @IsInt()
  @Min(0)
  power: number;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
