<script setup lang="ts">
import type { RawPokemon } from '@/types/Pokemon'
import { colorByType } from '@/utils/setColorCardByType'
import { computed } from 'vue'

const props = defineProps<{
  pokemon: RawPokemon
  isOpen: boolean
}>()

const typeColor = computed(() => colorByType(props.pokemon.types))

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex pt-20 items-start justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white dark:bg-gray-600 p-6 rounded-md shadow-md w-96">
        <h2 class="capitalize text-xl font-bold mb-4">{{ pokemon.name }}</h2>
        <img :src="pokemon.image" :alt="pokemon.name" class="w-52 h-52 mx-auto" />
        <div class="relative">
          <span
            v-for="(type, index) in pokemon.types"
            :key="index"
            class="mr-2 rounded-full text-sm text-white font-mono px-2 pb-1.5"
            :style="{ backgroundColor: typeColor[index] }"
          >
            {{ type }}
          </span>
        </div>
        <p class="mt-2">ID: {{ pokemon.id }}</p>

        <button @click="closeModal" class="mt-4 bg-red-500 text-white py-2 px-4 rounded-md">
          Close
        </button>
      </div>
    </div>
  </Teleport>
</template>
