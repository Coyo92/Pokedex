function createCard(pokemonData) {
    const postContainer = document.querySelector('.card-container1');
    if (!postContainer) return;
    const postElements = document.createElement('div');
    postElements.classList.add('card-container');
    postElements.innerHTML = `
      <div class="center-img">
          <img class="img" id="imgPokemon" src="${pokemonData.sprites.other.dream_world.front_default}" alt="${pokemonData.name}">
      </div>
      <div>
          <p class="heading"> ${pokemonData.name}  </p>
      </div>
      <div class="btn-container">
          <button class="btn-namePokemon"> ${pokemonData.types[0].type.name}  </button>
      </div>
      `;
    postContainer.appendChild(postElements);
  }
  export { createCard };