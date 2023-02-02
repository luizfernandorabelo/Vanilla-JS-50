document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('button');
  const jokeContainer = document.querySelector('#joke-container');
  
  async function getFetchedJokeData() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    return await response.json();
  }
  
  function updateJoke() {
    getFetchedJokeData().then(data => jokeContainer.innerHTML = data.joke);
  }
  
  btn.addEventListener('click', updateJoke);
  
  updateJoke();

});
