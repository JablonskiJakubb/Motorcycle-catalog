<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useMotorStore } from '../stores/motor-store';
import { RouterLink } from 'vue-router';
import { motorService } from '../api/motor-service';


const store = useMotorStore();
const searchQuery = ref('');

onMounted(() => {
  store.fetchMotors();
});

const filteredMotors = computed(() => {
  if (!searchQuery.value) return store.motors;
  const query = searchQuery.value.toLowerCase();
  return store.motors.filter(m => 
    m.name.toLowerCase().includes(query) || 
    m.brand.toLowerCase().includes(query) ||
    m.model.toLowerCase().includes(query)
  );
});

const getBadgeColor = (type: string) => {
  const colors: Record<string, string> = {
    'Sport': '#ef4444',
    'Naked': '#3b82f6',
    'Touring': '#10b981',
    'Enduro': '#f59e0b',
    'Cruiser': '#8b5cf6',
    'Adventure': '#06b6d4',
    'Classic': '#71717a',
    'Cafe Racer': '#78350f',
    'Supermoto': '#d946ef',
    'Chopper': '#475569'
  };
  return colors[type] || '#64748b';
};

</script>

<template>
  <div class="motor-list-container animate-fade">
    <header class="header">
      <div>
        <h1>Motor Catalog</h1>
        <p class="text-muted">Explore the world's most impressive machines.</p>
      </div>

    </header>

    <div class="search-bar glass">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search by name, brand or model..." 
      />
    </div>

    <div v-if="store.isLoading" class="loader">
      <div class="spinner"></div>
      <p>Loading machines...</p>
    </div>

    <div v-else-if="store.error" class="error-msg glass">
      {{ store.error }}
      <button @click="store.fetchMotors" class="btn btn-secondary">Retry</button>
    </div>

    <div v-else-if="filteredMotors.length === 0" class="empty-state glass">
      <p>No motors currently in the catalog.</p>
    </div>

    <div v-else class="grid">
      <div v-for="motor in filteredMotors" :key="motor.id" class="motor-card glass">
        <div class="card-image">
          <img :src="motorService.formatImageUrl(motor.imageUrl)" :alt="motor.name">
          <div class="type-badge" :style="{ backgroundColor: getBadgeColor(motor.type) }">
            {{ motor.type }}
          </div>
        </div>
        <div class="card-content">
          <h3>{{ motor.brand }} {{ motor.model }}</h3>
          <p class="name">{{ motor.name }}</p>
          <div class="specs">
            <span>{{ motor.year }}</span>
            <span>{{ motor.engineCapacity }}cc</span>
            <span>{{ motor.power }}HP</span>
          </div>
          <div class="actions">
            <RouterLink :to="'/motor/' + motor.id" class="btn btn-secondary btn-sm">Details</RouterLink>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.search-bar {
  margin-bottom: 2rem;
  padding: 0.5rem;
}

.search-bar input {
  background: transparent;
  border: none;
  box-shadow: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.motor-card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.motor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--primary);
}

.card-image {
  position: relative;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.type-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-color);
}

.name {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.specs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 0.75rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  flex: 1;
}

.loader, .empty-state, .error-msg {
  text-align: center;
  padding: 4rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(59, 130, 246, 0.1);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
