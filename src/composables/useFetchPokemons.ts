import { fetchPokemon } from '@/services/pokeApiService'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { usePokemonStore } from '@/stores/usePokemonStore'
import type { RawPokemon } from '@/types/Pokemon'

export function useFetchPokemon() {
  const loadPokemons = async (limit: number = 15): Promise<void> => {
    const ids = Array.from({ length: limit }, (_, i) => i + 1)
    const store = usePokemonStore()

    store.loading = true

    try {
      const data: RawPokemon[] = await Promise.all(ids.map((id) => fetchPokemon(id)))
      store.pokemons = await formatPokemonData(data)
    } catch (err) {
      store.error = 'Erro ao buscar a lista de Pokémons'
    } finally {
      store.loading = false
    }
  }

  return {
    loadPokemons
  }
}
