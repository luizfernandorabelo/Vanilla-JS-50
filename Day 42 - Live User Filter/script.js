const userListUl = document.querySelector('#user-list');
const filterInput = document.querySelector('#filter-input');

populateInitialUsers();

async function populateInitialUsers() {
  const response = await fetch('https://randomuser.me/api?results=50');
  const {results} = await response.json();
  console.log(results);
  results.forEach(user => {
    const userLi = document.createElement('li');
    userLi.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}">
      <div class="user-info">
        <h4>${user.name.first + ' ' + user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    userListUl.appendChild(userLi);
  });
}

filterInput.addEventListener('input', () => {
  userListUl.querySelectorAll('li').forEach(li => {
    if (!li.innerText.toLowerCase().includes(filterInput.value.toLowerCase()))
      li.classList.add('hide');
    else
      li.classList.remove('hide');
  });
});
