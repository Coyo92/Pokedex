import { fetchPokemonData, getPokemonDetails } from './api.js';
import { createCard } from './ui.js';

const apiPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

async function infoPokemon() {
  const allPokemon = await fetchPokemonData(apiPokemon);
  if (!allPokemon || !allPokemon.results) return;

  for (const pokemon of allPokemon.results) {
    const pokemonDetails = await getPokemonDetails(pokemon.name);
    if (pokemonDetails) {
      createCard(pokemonDetails);
    }
  }
}

infoPokemon();