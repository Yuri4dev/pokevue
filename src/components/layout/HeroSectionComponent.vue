<script setup lang="ts">
import SearchFilterComponent from '@/components/common/SearchFilterComponent.vue'
import { useFetchPokemonByName } from '@/composables/useFetchPokemonByName'
import { useFetchPokemon } from '@/composables/useFetchPokemons'
import { ref, type Ref } from 'vue'

const searchValue: Ref<string> = ref('')

const { loadPokemonByName } = useFetchPokemonByName()
const { loadPokemons } = useFetchPokemon()

const searchPokemon = (): void => {
  if (searchValue.value.trim() === '') {
    loadPokemons()
  } else {
    loadPokemonByName(searchValue.value)
  }
}
</script>

<template>
  <section class="bg-gray-50 rounded-md mb-5">
    <div class="p-8 md:p-12 lg:px-16">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Pokédex</h2>

        <p class="text-gray-500 mt-4">Use the advanced search to find Pokémon by name or number!</p>
      </div>

      <form @submit.prevent="searchPokemon" class="mx-auto mt-8 max-w-xl">
        <label
          for="default-search"
          class="text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            v-model="searchValue"
            id="default-search"
            class="lowercase block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search a pokémon"
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>

        <SearchFilterComponent />
      </form>
    </div>
  </section>
</template>
