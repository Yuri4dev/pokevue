<script setup lang="ts">
import DarkModeButtonComponent from '@/components/common/DarkModeButtonComponent.vue'
</script>

<template>
  <header>
    <div class="header">
      <h1>Logo</h1>

      <nav>
        <ul>
          <li><a href="#">Favoritos</a></li>
          <DarkModeButtonComponent />
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  color: currentColor;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
