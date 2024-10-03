<script setup lang="ts">
import { ref } from 'vue'

const darkModeIsActive = ref<boolean>(false)

const toggleDarkMode = (): void => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <label>
    <input type="checkbox" @change="toggleDarkMode" v-model="darkModeIsActive" />
    <span></span>
  </label>
</template>
