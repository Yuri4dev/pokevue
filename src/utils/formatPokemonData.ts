export const formatPokemonData = (data: any) => {
  const formattedData = data.map((pokemon: any) => {
    return {
      ...pokemon,
      image: pokemon.sprites.other['official-artwork'].front_default,
      gif: pokemon.sprites.other.showdown.front_default,
      types: pokemon.types.map((type: { type: { name: string } }) => type.type.name)
    }
  })

  return formattedData
}
