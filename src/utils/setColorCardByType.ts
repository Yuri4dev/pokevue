export const typeColors: { [key: string]: string } = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A878',
  electric: '#F8D030',
  ice: '#98D8D8',
  fairy: '#F0B6F5',
  poison: '#A040A0',
  ground: '#E0C068',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  flying: '#A890F0'
}

export const colorByType = (types: any[]) => {
  return types.map((type: any) => {
    return typeColors[type] || '#fff'
  })
}
