import type { RawPokemon } from '@/types/Pokemon'
import { defineStore } from 'pinia'

interface State {
  pokemons: RawPokemon[]
  loading: boolean
  error: string | null
}

export const usePokemonStore = defineStore('usePokemonStore', {
  state: (): State => {
    return {
      pokemons: [],
      loading: false,
      error: null
    }
  }
})
