import axios from 'axios';
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

  async create(motor: Omit<Motor, 'id' | 'createdAt' | 'updatedAt'>): Promise<Motor> {
    const response = await apiClient.post<Motor>('/motors', motor);
    return response.data;
  },





  formatImageUrl(url?: string): string {
    if (!url) return 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600';
    if (url.startsWith('http')) return url;
    return `${API_URL}${url}`;
  }
};

