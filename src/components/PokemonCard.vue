<script setup lang="ts">
import type { RawPokemon } from '@/types/Pokemon'
import { colorByType } from '@/utils/setColorCardByType'
import { computed } from 'vue'

const props = defineProps<{
  pokemon: RawPokemon
}>()

const typeColor = computed(() => colorByType(props.pokemon.types))
</script>

<template>
  <div class="w-40 cursor-pointer group relative block">
    <button
      class="absolute -end-1.5 -top-1.5 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>

    <img
      :src="pokemon.image"
      :alt="pokemon.name"
      class="w-full p-2 bg-gray-50 rounded-md transition duration-500 group-hover:scale-105"
    />

    <div class="flex gap-2 justify-between items-center">
      <h3 class="text-sm font-medium text-gray-900 capitalize">{{ pokemon.name }}</h3>

      <h4 class="text-xs">Nº{{ pokemon.id }}</h4>
    </div>
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
  </div>
</template>
