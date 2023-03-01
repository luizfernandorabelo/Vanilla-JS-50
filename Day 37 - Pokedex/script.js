const MAX_POKEMONS = 210;

const COLORS = {
  fire: '#f1a052',
  grass: '#60b65a',
	electric: '#f2cc38',
	water: '#358dd5',
	ground: '#e16f37',
	rock: '#c2b182',
	fairy: '#ec84e3',
	poison: '#b069c8',
	bug: '#a3ae20',
	dragon: '#8877e9',
	psychic: '#ef5990',
	flying: '#6e86ce',
	fighting: '#914422',
	normal: '#c9c6bf',
  ghost: '#615dad',
  ice: '#6bceed',
  dark: '#473525',
  steel: '#bdbbc6'
}

const pokedexContainer = document.querySelector('#pokedex-container');

async function fetchAllPokemons() {
  for (let id = 1; id <= MAX_POKEMONS; id++) {
    await fetchSinglePokemon(id);
  }
}

async function fetchSinglePokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  createPokemonCard(data);
}

function createPokemonCard(pokemonData) {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.classList.add('pokemon');
  pokemonDiv.innerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${pokemonData.id.toString().padStart(3, '0')}</span>
      <h3 class="name">${pokemonData.name}</h3>
      <small class="type">Type: <span>${pokemonData.types[0].type.name}</span></small>
    </div>
  `;
  pokemonDiv.style.backgroundColor = COLORS[pokemonData.types[0].type.name];
  pokedexContainer.appendChild(pokemonDiv);
}

fetchAllPokemons();