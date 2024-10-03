import { fetchPokemonDetails } from '@/services/pokeApiService'
import { usePokemonStore } from '@/stores/usePokemonStore'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { useFetchPokemon } from './useFetchPokemons'
import type { RawPokemon } from '@/types/Pokemon'

const { loadPokemons } = useFetchPokemon()

export function useFetchPokemonByName() {
  const loadPokemonByName = async (name: string): Promise<void> => {
    const store = usePokemonStore()
    store.loading = true

    try {
      let data: RawPokemon[] = []

      if (name) {
        const pokemonDetails: RawPokemon = await fetchPokemonDetails(name)
        data = [pokemonDetails]
      } else {
        await loadPokemons()
        data = store.pokemons
      }
      store.pokemons = await formatPokemonData(data)
    } catch (err) {
      store.error = 'Erro ao buscar o Pokémon pelo nome'
    } finally {
      store.loading = false
    }
  }

  return {
    loadPokemonByName
  }
}
