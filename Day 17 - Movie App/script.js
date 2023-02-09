const API_URL = 'https://api.themoviedb.org';
const API_KEY = '041f4e6fbfc9ac123ea1a96af397dc11';
const DISCOVER_PARAMS = '3/discover/movie?sort_by=popularity.desc';
const SEARCH_PARAMS = '3/search/movie'

const DISCOVER_URL = `${API_URL}/${DISCOVER_PARAMS}&api_key=${API_KEY}&page=1`;
const SEARCH_URL = `${API_URL}/${SEARCH_PARAMS}?api_key=${API_KEY}&query="`;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';


const form = document.querySelector('form');
const search = document.querySelector('#search');
const main = document.querySelector('main');


async function getMovies(url) {

  const res = await fetch(url);
  const movies = await res.json();

  main.innerHTML = '';

  console.log(movies);

  for (let i = 0; i < movies.results.length; i++) {
    const movieDiv = document.createElement('div');
    const backdropPath = movies.results[i].backdrop_path;
    const originalTitle = movies.results[i].original_title;
    const voteAverage = movies.results[i].vote_average;
    const overview = movies.results[i].overview;
    movieDiv.className = 'movie';
    movieDiv.innerHTML = `<img src="${IMAGE_PATH + backdropPath}">
                          <div class="movie-info">
                            <h3>${originalTitle}</h3>
                            <span class="${voteAverage >= 8 ? "green" : voteAverage >= 6 ? "orange" : "red"}">${voteAverage}</span>
                          </div>
                          <div class="overview">
                            <h3>Overview</h3>
                            ${overview}
                          </div>`
    main.appendChild(movieDiv);
  }

}


form.addEventListener('submit', (e) => {

  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  }

});


getMovies(DISCOVER_URL);
