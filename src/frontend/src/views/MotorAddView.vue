<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { motorService } from '../api/motor-service';

const router = useRouter();
const isSubmitting = ref(false);
const error = ref<string | null>(null);

const motorForm = reactive({
  name: '',
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  engineCapacity: 600,
  power: 100,
  type: 'Sport',
  description: '',
  imageUrl: ''
});

const motorTypes = [
  'Sport',
  'Naked',
  'Cruiser',
  'Touring',
  'Adventure',
  'Off-road',
  'Scooter',
  'Classic'
];

async function handleSubmit() {
  isSubmitting.value = true;
  error.value = null;
  
  try {
    await motorService.create(motorForm);
    router.push({ name: 'home' });
  } catch (e: any) {
    console.error('Failed to create motor:', e);
    error.value = e.response?.data?.message || 'Failed to add motorcycle. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div class="add-view animate-fade">
    <div class="header">
      <h1>Add Motorcycle</h1>
      <p>Share your favorite machine with the community</p>
    </div>

    <form @submit.prevent="handleSubmit" class="glass add-form">
      <div v-if="error" class="error-banner">
        {{ error }}
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label for="name">Display Name</label>
          <input 
            id="name" 
            v-model="motorForm.name" 
            type="text" 
            placeholder="e.g. My Fast Ninja" 
            required
          />
        </div>

        <div class="form-group">
          <label for="brand">Brand</label>
          <input 
            id="brand" 
            v-model="motorForm.brand" 
            type="text" 
            placeholder="e.g. Kawasaki" 
            required
          />
        </div>

        <div class="form-group">
          <label for="model">Model</label>
          <input 
            id="model" 
            v-model="motorForm.model" 
            type="text" 
            placeholder="e.g. ZX-6R" 
            required
          />
        </div>

        <div class="form-group">
          <label for="year">Year</label>
          <input 
            id="year" 
            v-model.number="motorForm.year" 
            type="number" 
            min="1885" 
            required
          />
        </div>

        <div class="form-group">
          <label for="engineCapacity">Engine Capacity (cc)</label>
          <input 
            id="engineCapacity" 
            v-model.number="motorForm.engineCapacity" 
            type="number" 
            min="0" 
            required
          />
        </div>

        <div class="form-group">
          <label for="power">Power (HP)</label>
          <input 
            id="power" 
            v-model.number="motorForm.power" 
            type="number" 
            min="0" 
            required
          />
        </div>

        <div class="form-group">
          <label for="type">Category</label>
          <select id="type" v-model="motorForm.type" required>
            <option v-for="t in motorTypes" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>

        <div class="form-group full-width">
          <label for="imageUrl">Image URL (Optional)</label>
          <input 
            id="imageUrl" 
            v-model="motorForm.imageUrl" 
            type="url" 
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div class="form-group full-width">
          <label for="description">Description</label>
          <textarea 
            id="description" 
            v-model="motorForm.description" 
            rows="4" 
            placeholder="Tell us more about this motorcycle..."
          ></textarea>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-secondary" @click="router.back()">Cancel</button>
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? 'Adding...' : 'Add Motorcycle' }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.add-view {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
  text-align: center;
}

.header p {
  color: var(--text-muted);
}

.add-form {
  padding: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.full-width {
  grid-column: span 2;
}

.error-banner {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .full-width {
    grid-column: span 1;
  }
}
</style>
