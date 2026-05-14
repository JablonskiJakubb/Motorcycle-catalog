import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('motors')
export class Motor {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Yamaha MT-07' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Yamaha' })
  @Column()
  brand: string;

  @ApiProperty({ example: 'MT-07' })
  @Column()
  model: string;

  @ApiProperty({ example: 2021 })
  @Column()
  year: number;

  @ApiProperty({ example: 689, description: 'Pojemność w cm³' })
  @Column()
  engineCapacity: number;

  @ApiProperty({ example: 75, description: 'Moc w KM' })
  @Column()
  power: number;

  @ApiProperty({ example: 'naked' })
  @Column('text')
  type: string;

  @ApiPropertyOptional({ example: 'Świetny motocykl do miasta.' })
  @Column('text', { nullable: true })
  description: string;

  @ApiPropertyOptional({ example: 'https://example.com/mt07.jpg' })
  @Column({ nullable: true })
  imageUrl: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}