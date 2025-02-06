async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function getPokemonDetails(namePokemon) {
    const dataPokemon = 'https://pokeapi.co/api/v2/pokemon/';
    return fetchPokemonData(dataPokemon + namePokemon);
}

export { fetchPokemonData, getPokemonDetails };