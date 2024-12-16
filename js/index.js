const apiPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const dataPokemon = 'https://pokeapi.co/api/v2/pokemon/';

const listaPokemon = document.querySelector("#listaPokemon");

//Funcion async/await fetch.
async function getPokedex() {
    const response = await fetch(apiPokemon);
    const pokedex = await response.json();
    return pokedex;
}

async function getDataPokemon(namePokemon) {
    const response = await fetch(dataPokemon + namePokemon);
    const infoPokedex = await response.json();
    return infoPokedex;
}

function infoPokemon() {
    //Call Function getPokedex for get all pokemon.
    getPokedex().then( allPokemon => { 
        let listPokemon = allPokemon.results;
        //Use map to go through the entire arrangement.
        listPokemon.map(function(element, index, array) {
            //Call Function getDataPokemon for get all info about one pokemon.
            getDataPokemon(element.name).then( allPokemon => { 
                //Call Function createCard to create all cards one to one.
                createCard( allPokemon );
            })
        })//Finaliza el map
        
    })
}

infoPokemon();

function createCard (pokedex) {
    if (pokedex.types[0].type !== 0) {
        console.log(pokedex.types[0].type);
    }
    const postContainer = document.querySelector('.card-container1');
    const postElements = document.createElement('div');
    postElements.classList.add('card-container');
    postElements.innerHTML = `
    <div class="center-img">
        <img class="img" id="imgPokemon" src="${ pokedex.sprites.other.dream_world.front_default }" alt="${ pokedex.name }">
    </div>
    <div>
        <p class="heading"> ${ pokedex.name }  </p>
    </div>
    <div class="btn-container">
        <button class="btn-namePokemon"> ${ pokedex.types[0].type.name }  </button>
    </div>
    `;
    postContainer.appendChild(postElements);
}