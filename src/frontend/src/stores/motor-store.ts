import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Motor } from '../types/motor';
import { motorService } from '../api/motor-service';

export const useMotorStore = defineStore('motor', () => {
  const motors = ref<Motor[]>([]);
  const currentMotor = ref<Motor | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  async function fetchMotors() {
    isLoading.value = true;
    error.value = null;
    try {
      motors.value = await motorService.getAll();
    } catch (e: any) {
      error.value = e.message || 'Failed to fetch motors';
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchMotorById(id: string) {
    isLoading.value = true;
    error.value = null;
    try {
      currentMotor.value = await motorService.getById(id);
    } catch (e: any) {
      error.value = e.message || 'Failed to fetch motor';
    } finally {
      isLoading.value = false;
    }
  }



  return {
    motors,
    currentMotor,
    isLoading,
    error,
    fetchMotors,
    fetchMotorById,
  };
});
