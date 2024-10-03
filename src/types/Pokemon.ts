export interface PokemonDetails {
  id: number
  name: string
  image: string
  types: string[]
}

export interface RawPokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
}

export interface PokemonType {
  name: string
  pokemon: Array<{
    name: string
    url: string
  }>
}
