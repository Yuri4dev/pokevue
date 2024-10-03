import { fetchPokemon } from '@/services/pokeApiService'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { usePokemonStore } from '@/stores/usePokemonStore'
import type { RawPokemon } from '@/types/Pokemon'

export function useFetchEvolutionChain() {
  const fetchEvolutionChain = async (id: number): Promise<void> => {
    const store = usePokemonStore()

    store.loading = true

    try {
      const data: RawPokemon = await fetchPokemon(id)
      console.log(data)
    } catch (err) {
      store.error = 'Erro ao buscar a lista de Pokémons'
    } finally {
      store.loading = false
    }
  }

  return {
    fetchEvolutionChain
  }
}
