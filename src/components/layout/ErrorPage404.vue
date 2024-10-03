<script setup lang="ts">
import { usePokemonStore } from '@/stores/usePokemonStore'
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'

const store = usePokemonStore()

const { error } = storeToRefs(store) as { error: Ref<string | null> }

const closeErrorComponent = (): void => {
  store.error = null
}
</script>

<template>
  <div
    v-if="error"
    class="w-full h-full absolute top-0 left-0 z-50 grid place-content-center bg-white"
  >
    <div class="text-center">
      <img class="w-60 mx-auto object-cover" src="../../assets/404-image.png" alt="Error 404" />

      <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Oops! Pokémon not found
      </h1>

      <button
        @click="closeErrorComponent"
        class="mt-6 group relative inline-block focus:outline-none focus:ring"
        href="#"
      >
        <span
          class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>

        <span
          class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
        >
          Back to Home
        </span>
      </button>
    </div>
  </div>
</template>
