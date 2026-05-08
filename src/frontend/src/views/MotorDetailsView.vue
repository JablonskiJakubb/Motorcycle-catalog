<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useMotorStore } from '../stores/motor-store';
import { useRouter, RouterLink } from 'vue-router';
import { motorService } from '../api/motor-service';

const props = defineProps<{
  id: string;
}>();

const store = useMotorStore();
const router = useRouter();

onMounted(() => {
  store.fetchMotorById(props.id);
});

onUnmounted(() => {
  store.currentMotor = null;
});


</script>

<template>
  <div class="details-container animate-fade">
    <div v-if="store.isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <div v-else-if="store.error" class="error-msg glass">
      {{ store.error }}
      <button @click="router.push('/')" class="btn btn-secondary">Back to List</button>
    </div>

    <div v-else-if="store.currentMotor" class="details-layout">
      <header class="header">
        <button @click="router.push('/')" class="btn btn-secondary">
          ← Back
        </button>

      </header>

      <div class="main-content glass">
        <div class="image-section">
          <img :src="motorService.formatImageUrl(store.currentMotor.imageUrl)" :alt="store.currentMotor.name">
        </div>
        
        <div class="info-section">
          <div class="badge">{{ store.currentMotor.type }}</div>
          <h1>{{ store.currentMotor.brand }} {{ store.currentMotor.model }}</h1>
          <p class="subtitle">{{ store.currentMotor.name }}</p>
          
          <div class="specs-grid">
            <div class="spec-item">
              <span class="label">Year</span>
              <span class="value">{{ store.currentMotor.year }}</span>
            </div>
            <div class="spec-item">
              <span class="label">Engine</span>
              <span class="value">{{ store.currentMotor.engineCapacity }} cc</span>
            </div>
            <div class="spec-item">
              <span class="label">Power</span>
              <span class="value">{{ store.currentMotor.power }} HP</span>
            </div>
          </div>

          <div class="description">
            <h3>Description</h3>
            <p>{{ store.currentMotor.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  max-width: 1000px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  min-height: 500px;
}

.image-section {
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-section img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.info-section {
  padding: 3rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: var(--primary);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
}

.spec-item .label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.spec-item .value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.description h3 {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.description p {
  line-height: 1.8;
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}

.loader {
  text-align: center;
  padding: 5rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(59, 130, 246, 0.1);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
