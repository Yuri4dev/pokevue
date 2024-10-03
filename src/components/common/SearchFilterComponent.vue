<script setup lang="ts">
import { useFetchPokemonByType } from '@/composables/useFetchPokemonByType'
import { useFetchPokemon } from '@/composables/useFetchPokemons'
import { pokemonTypes } from '@/utils/pokemonTypes'
import { typeColors } from '@/utils/setColorCardByType'
import { ref, type Ref } from 'vue'

const activeFilter: Ref<string> = ref('')
const detailsRef: Ref<HTMLDetailsElement | undefined> = ref()

const { loadPokemonsByType } = useFetchPokemonByType()
const { loadPokemons } = useFetchPokemon()

const searchByFilter = (type: string): void => {
  if (activeFilter.value !== type) {
    activeFilter.value = type
    loadPokemonsByType(type)
  }
}

const clearFilter = (): void => {
  detailsRef.value?.removeAttribute('open')
  loadPokemons()
}
</script>

<template>
  <div class="relative mt-4">
    <details ref="detailsRef" class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="w-max flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="dark:text-gray-300 text-sm font-medium"> Filters </span>

        <span class="transition group-open:-rotate-180 dark:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <fieldset
        class="rounded-md z-50 p-2 w-full bg-white border absolute top-10 flex flex-wrap gap-3"
      >
        <div v-for="(type, index) in pokemonTypes" :key="index">
          <input
            type="radio"
            :id="type + index"
            name="typeName"
            class="radio-input hidden"
            @click="searchByFilter(type)"
          />
          <label
            :for="type + index"
            :style="{ borderColor: typeColors[type], '--selected-color': typeColors[type] }"
            class="radio-label text-sm flex cursor-pointer items-center justify-center rounded-md border-4 px-3 py-1 capitalize"
          >
            {{ type }}
          </label>
        </div>

        <button
          type="button"
          @click="clearFilter"
          class="reset-button w-full mt-4 p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md"
        >
          Limpar filtros
        </button>
      </fieldset>
    </details>
  </div>
</template>

<style scoped>
.radio-input:checked + .radio-label {
  background-color: var(--selected-color);
  color: white;
}
</style>
