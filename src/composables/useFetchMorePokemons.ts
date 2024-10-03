import { fetchPokemon } from '@/services/pokeApiService'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { usePokemonStore } from '@/stores/usePokemonStore'
import type { RawPokemon } from '@/types/Pokemon'

export function useFetchMorePokemons() {
  const loadMorePokemons = async (limit: number = 15): Promise<void> => {
    const store = usePokemonStore()
    const currentCount = store.pokemons.length
    const ids = Array.from({ length: limit }, (_, i) => currentCount + i + 1)

    store.loading = true

    try {
      const data: RawPokemon[] = await Promise.all(ids.map((id) => fetchPokemon(id)))
      store.pokemons = [...store.pokemons, ...formatPokemonData(data)]
    } catch (err) {
      store.error = 'Erro ao buscar a lista de Pokémons'
    } finally {
      store.loading = false
    }
  }

  return {
    loadMorePokemons
  }
}
