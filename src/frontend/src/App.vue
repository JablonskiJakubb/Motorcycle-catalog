<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-layout">
    <nav class="main-nav">
      <div class="logo">MOTOR<span>CATALOG</span></div>
      <div class="nav-links">
        <RouterLink to="/" active-class="active">Catalog</RouterLink>
        <RouterLink to="/add" active-class="active">Add Motorcycle</RouterLink>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
    
    <footer class="footer">
      <p>&copy; 2026 Motor Catalog. Built for speed.</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.logo span {
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 600;
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--primary);
}

main {
  flex: 1;
}

.footer {
  padding: 4rem 0 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.875rem;
}
</style>
