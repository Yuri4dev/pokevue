export interface PokemonDetails {
  id: number
  name: string
  image: string
  types: string[]
}

export interface RawPokemon {
  id: number
  name: string
  favorite: boolean
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
  image: string
}

export interface PokemonType {
  name: string
  pokemon: Array<{
    name: string
    url: string
  }>
}
