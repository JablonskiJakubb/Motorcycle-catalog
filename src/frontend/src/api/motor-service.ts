import axios from 'axios';
<<<<<<< HEAD
import type { Motor, CreateMotorDto, UpdateMotorDto } from '../types/motor';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
=======
import type { Motor } from '../types/motor';

const DEFAULT_API_URL = '/api';

function resolveApiUrl(): string {
  const rawApiUrl = import.meta.env.VITE_API_URL;
  const candidate = (rawApiUrl && rawApiUrl.trim()) || DEFAULT_API_URL;

  if (candidate.startsWith('/')) {
    return candidate.replace(/\/$/, '');
  }

  try {
    return new URL(candidate).toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_API_URL;
  }
}

export const API_URL = resolveApiUrl();
>>>>>>> wersja_2.0

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

<<<<<<< HEAD
  async create(motor: CreateMotorDto): Promise<Motor> {
=======
  async create(motor: Omit<Motor, 'id' | 'createdAt' | 'updatedAt'>): Promise<Motor> {
>>>>>>> wersja_2.0
    const response = await apiClient.post<Motor>('/motors', motor);
    return response.data;
  },

<<<<<<< HEAD
  async update(id: string, motor: UpdateMotorDto): Promise<Motor> {
    const response = await apiClient.put<Motor>(`/motors/${id}`, motor);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/motors/${id}`);
  },
};
=======




  formatImageUrl(url?: string): string {
    if (!url) return 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600';
    if (url.startsWith('http')) return url;
    return `${API_URL}${url}`;
  }
};

>>>>>>> wersja_2.0
