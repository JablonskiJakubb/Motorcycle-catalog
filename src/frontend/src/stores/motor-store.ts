import { defineStore } from 'pinia';
import { ref } from 'vue';
<<<<<<< HEAD
import type { Motor, CreateMotorDto, UpdateMotorDto } from '../types/motor';
=======
import type { Motor } from '../types/motor';
>>>>>>> wersja_2.0
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

<<<<<<< HEAD
  async function addMotor(motor: CreateMotorDto) {
    isLoading.value = true;
    error.value = null;
    try {
      const newMotor = await motorService.create(motor);
      motors.value.push(newMotor);
      return newMotor;
    } catch (e: any) {
      error.value = e.message || 'Failed to add motor';
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  async function updateMotor(id: string, motor: UpdateMotorDto) {
    isLoading.value = true;
    error.value = null;
    try {
      const updated = await motorService.update(id, motor);
      const index = motors.value.findIndex(m => m.id === id);
      if (index !== -1) {
        motors.value[index] = updated;
      }
      if (currentMotor.value?.id === id) {
        currentMotor.value = updated;
      }
      return updated;
    } catch (e: any) {
      error.value = e.message || 'Failed to update motor';
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteMotor(id: string) {
    isLoading.value = true;
    error.value = null;
    try {
      await motorService.delete(id);
      motors.value = motors.value.filter(m => m.id !== id);
      if (currentMotor.value?.id === id) {
        currentMotor.value = null;
      }
    } catch (e: any) {
      error.value = e.message || 'Failed to delete motor';
      throw e;
    } finally {
      isLoading.value = false;
    }
  }
=======

>>>>>>> wersja_2.0

  return {
    motors,
    currentMotor,
    isLoading,
    error,
    fetchMotors,
    fetchMotorById,
<<<<<<< HEAD
    addMotor,
    updateMotor,
    deleteMotor,
=======
>>>>>>> wersja_2.0
  };
});
