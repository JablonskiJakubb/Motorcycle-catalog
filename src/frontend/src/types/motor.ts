export interface Motor {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  engineCapacity: number;
  power: number;
  type: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

<<<<<<< HEAD
export type CreateMotorDto = Omit<Motor, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateMotorDto = Partial<CreateMotorDto>;
=======
>>>>>>> wersja_2.0
