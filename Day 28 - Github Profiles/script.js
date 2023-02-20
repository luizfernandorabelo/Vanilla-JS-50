const API_URL = 'https://api.github.com/users/';

const mainDiv = document.querySelector('#main-container');
const form = document.querySelector('.user-form');
const userNameInput = document.querySelector('#username-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userName = userNameInput.value;

  if (userName) {
    getUser(userName);
    userNameInput.value = '';
  } else {
    alert('Fill the username to make a search!');
  }
});

async function getUser(userName) {
  try {
    const userResponse = await axios.get(API_URL + userName);
    const repositoryResponse = await axios.get(API_URL + userName + '/repos?sort=created');
    createUserCard(userResponse.data, repositoryResponse.data);
  } catch (err) {
    console.log(err);
    if (err.response.status === 404)  {
      createErrorCard('No profile with this username');
    }
  }
}

function createUserCard(userData, repoData) {
  let reposHTML = '';
  repoData.slice(0,10).forEach(repo => {
    reposHTML += `<a class="repo" href="${repo.html_url}" target="_blank">${repo.name}</a>`
  });

  const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${userData.avatar_url}" alt="${userData.name} Avatar Image">
      </div>
      <div class="user-info-container">
        <h2>${userData.name}</h2>
        <p>${userData.bio ? userData.bio : ''}</p>
        <ul>
          <li>${userData.followers} <strong id="followers">Followers</strong></li>
          <li>${userData.following} <strong id="following">Following</strong></li>
          <li>${userData.public_repos} <strong id="repositories">Repositories</strong></li>
        </ul>
        <div id="repos-container">${reposHTML}</div>
      </div>
    </div>
  `;

  mainDiv.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h2>${message}</h2> 
    </div>
  `;
  mainDiv.innerHTML = cardHTML;
}
