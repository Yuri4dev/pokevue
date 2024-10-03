import type { RawPokemon } from '@/types/Pokemon'

export const fetchPokemon = async (id: number): Promise<RawPokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon')
  }

  const data: RawPokemon = await response.json()

  return data
}

export const fetchPokemonDetails = async (name: string = ''): Promise<RawPokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon detail')
  }

  const data: RawPokemon = await response.json()

  return data
}

export const fetchPokemonSpecies = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon species')
  }

  const data = await response.json()

  return data
}

export const fetchPokemonByType = async (type: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon by type')
  }

  const data = await response.json()

  return data
}

export const fetchPokemonEvolutionChain = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon evolution chain')
  }

  const data = await response.json()

  return data
}
