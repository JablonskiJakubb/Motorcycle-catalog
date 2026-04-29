<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMotorStore } from '../stores/motor-store';
import { useRouter } from 'vue-router';
import type { CreateMotorDto } from '../types/motor';

const props = defineProps<{
  id?: string;
}>();

const store = useMotorStore();
const router = useRouter();

const isEdit = computed(() => !!props.id);

const form = ref<CreateMotorDto>({
  name: '',
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  engineCapacity: 600,
  power: 100,
  type: 'Sport',
  description: '',
  imageUrl: '',
});

onMounted(async () => {
  if (isEdit.value && props.id) {
    await store.fetchMotorById(props.id);
    if (store.currentMotor) {
      form.value = {
        name: store.currentMotor.name,
        brand: store.currentMotor.brand,
        model: store.currentMotor.model,
        year: store.currentMotor.year,
        engineCapacity: store.currentMotor.engineCapacity,
        power: store.currentMotor.power,
        type: store.currentMotor.type,
        description: store.currentMotor.description,
        imageUrl: store.currentMotor.imageUrl,
      };
    }
  }
});

const handleSubmit = async () => {
  try {
    if (isEdit.value && props.id) {
      await store.updateMotor(props.id, form.value);
    } else {
      await store.addMotor(form.value);
    }
    router.push('/');
  } catch (e) {
    // Error handled by store
  }
};

const motorTypes = ['Sport', 'Naked', 'Touring', 'Enduro', 'Cruiser', 'Chopper', 'Adventure'];
</script>

<template>
  <div class="form-container animate-fade">
    <header class="header">
      <button @click="router.back()" class="btn btn-secondary">← Back</button>
      <h1>{{ isEdit ? 'Edit Machine' : 'Add New Machine' }}</h1>
    </header>

    <div class="glass form-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-grid">
          <div class="form-group">
            <label>Name (Internal Tag)</label>
            <input v-model="form.name" type="text" required placeholder="e.g. My Beast">
          </div>
          
          <div class="form-group">
            <label>Brand</label>
            <input v-model="form.brand" type="text" required placeholder="e.g. Yamaha">
          </div>

          <div class="form-group">
            <label>Model</label>
            <input v-model="form.model" type="text" required placeholder="e.g. MT-07">
          </div>

          <div class="form-group">
            <label>Type</label>
            <select v-model="form.type">
              <option v-for="type in motorTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Year</label>
            <input v-model.number="form.year" type="number" required>
          </div>

          <div class="form-group">
            <label>Engine Capacity (cc)</label>
            <input v-model.number="form.engineCapacity" type="number" required>
          </div>

          <div class="form-group">
            <label>Power (HP)</label>
            <input v-model.number="form.power" type="number" required>
          </div>

          <div class="form-group">
            <label>Image URL</label>
            <input v-model="form.imageUrl" type="url" placeholder="https://...">
          </div>
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea v-model="form.description" rows="5" placeholder="Tell us more about this bike..."></textarea>
        </div>

        <div v-if="store.error" class="error-text">
          {{ store.error }}
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary" :disabled="store.isLoading">
            {{ store.isLoading ? 'Saving...' : (isEdit ? 'Update Machine' : 'Create Machine') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.form-card {
  padding: 3rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  min-width: 200px;
}

.error-text {
  color: var(--danger);
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
