<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import { useFetchPokemon } from '@/composables/useFetchPokemons'
import PokemonModal from './PokemonModal.vue'
import { usePokemonStore } from '@/stores/usePokemonStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import ErrorPage404 from './layout/ErrorPage404.vue'
import LoadingSpinner from './common/LoadingSpinner.vue'
import { useFetchMorePokemons } from '@/composables/useFetchMorePokemons'
import type { RawPokemon } from '@/types/Pokemon'

const store = usePokemonStore()
const { loadPokemons } = useFetchPokemon()
const { loadMorePokemons } = useFetchMorePokemons()
const { pokemons, loading, error } = storeToRefs(store)

onMounted(async () => {
  await loadPokemons()
})

const isModalOpen = ref<boolean>(false)
const selectedPokemon = ref<RawPokemon | null>(null)

const openModal = (pokemon: RawPokemon) => {
  selectedPokemon.value = pokemon
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedPokemon.value = null
}

const getMorePokemon = async () => {
  await loadMorePokemons()
}
</script>

<template>
  <div v-if="pokemons" class="flex gap-5 mx-auto flex-wrap justify-center">
    <LoadingSpinner v-if="loading" />

    <transition
      enter-active-class="transition-opacity duration-500 ease"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500 ease"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ErrorPage404 v-if="error" />
    </transition>

    <transition-group
      name="fade"
      tag="div"
      class="flex flex-wrap justify-center gap-4"
      enter-active-class="transition transform duration-500"
      leave-active-class="transition transform duration-500"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :pokemon="pokemon"
        @click="openModal(pokemon)"
      />
    </transition-group>

    <button
      type="button"
      @click="getMorePokemon"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 m-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Carregar mais Pokémon
    </button>
  </div>

  <PokemonModal
    v-if="selectedPokemon"
    :isOpen="isModalOpen"
    :pokemon="selectedPokemon"
    @close="closeModal"
  />
</template>
