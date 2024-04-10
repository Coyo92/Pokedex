const apiPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const dataPokemon = 'https://pokeapi.co/api/v2/pokemon/';

const listaPokemon = document.querySelector("#listaPokemon");

function getPokemons() {
    return fetch(apiPokemon);
}

function getPokemon(pokemon) {
    return fetch(dataPokemon + pokemon);
}

function getPokedex() {

    let pokemon = getPokemons();
    pokemon.then((response) => response.json())
            .then((res2) => {
                let pokedex = res2.results;
                console.log(res2)
                //
                for (let i = 0; i <= pokedex.length - 1; i ++) {
                    let name = res2.results[i].name;
                    //
                    let infoPokemon = getPokemon(name);
                    infoPokemon.then((response) => response.json())
                            .then((response2) => {
                                //console.log(response2);
                                let idPokemon = response2.id;
                                let namePokemon = response2.name;
                                let spritesPokemon = response2.sprites.other.dream_world.front_default;
                                let statsPokemon = response2.stats;
                                let typesPokemon = response2.types;
                                //setPokedex ( idPokemon, namePokemon, spritesPokemon, statsPokemon, typesPokemon );
                                setData( response2 );
                                //console.log('id: ', i, 'pokemon: ', name, 'sprite: ', spritesPokemon);
                            });
                }
            });

    //console.log(pokemon);
}

getPokedex();

function setData (pokedex) {
    const postContainer = document.querySelector('.card-container1');
    const postElements = document.createElement('div');
    postElements.classList.add('card-container');
    postElements.innerHTML = `
    <div class="center-img">
        <img class="img" id="imgPokemon" src="${ pokedex.sprites.other.dream_world.front_default }" alt="${ pokedex.name }">
    </div>
    <div>
        <p class="heading"> ${ pokedex.name } </p>
    </div>
    `;
    postContainer.appendChild(postElements);
}


function setData1(elementID, texto) {


    
    let elementIdHTML = document.querySelector(elementID);
    elementIdHTML.innerHTML = texto;
    return;
}

function setSprite(elementID, sprite) {
    let imgPokemon = document.getElementById(elementID);
    imgPokemon.src = sprite;
    return;
}