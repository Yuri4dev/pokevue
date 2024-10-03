import { fetchPokemon, fetchPokemonByType } from '@/services/pokeApiService'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { usePokemonStore } from '@/stores/usePokemonStore'

const extractIdFromUrl = (url: string) => {
  const segments = url.split('/')
  return segments[segments.length - 2]
}

export function useFetchPokemonByType() {
  const loadPokemonsByType = async (type: string) => {
    const store = usePokemonStore()

    store.loading = true

    try {
      const response = await fetchPokemonByType(type)
      const ids = response.pokemon.map((pokemon: any) => extractIdFromUrl(pokemon.pokemon.url))
      const data = await Promise.all(ids.map((id: any) => fetchPokemon(id)))
      store.pokemons = await formatPokemonData(data)
    } catch (err) {
      store.error = 'Erro ao buscar Pokémon desse tipo'
    } finally {
      store.loading = false
    }
  }

  return {
    loadPokemonsByType
  }
}
