import axios from 'axios';
import type { Motor, CreateMotorDto, UpdateMotorDto } from '../types/motor';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const motorService = {
  async getAll(): Promise<Motor[]> {
    const response = await apiClient.get<Motor[]>('/motors');
    return response.data;
  },

  async getById(id: string): Promise<Motor> {
    const response = await apiClient.get<Motor>(`/motors/${id}`);
    return response.data;
  },

  async create(motor: CreateMotorDto): Promise<Motor> {
    const response = await apiClient.post<Motor>('/motors', motor);
    return response.data;
  },

  async update(id: string, motor: UpdateMotorDto): Promise<Motor> {
    const response = await apiClient.put<Motor>(`/motors/${id}`, motor);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/motors/${id}`);
  },
};
