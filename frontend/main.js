const form = document.querySelector('form');
const h4 = document.querySelector('h4');
const reponseContainer = document.querySelector('.response-container');
const input = document.querySelector('#nl-question');
const codeBlock = document.querySelector('.response-container .card-body');

const postData = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      title: `${input.value}`,
      body: 'test',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => displaySqlData(data))
}

const displayData = (e) => {
  e.preventDefault();
  h4.textContent = `Results for: -${input.value}`;
  reponseContainer.style.opacity = 1;
  reponseContainer.style.transition = 'all .5s ease-in-out';
  displaySqlData();
  }

const displaySqlData = (data) => {
  data ? (
    codeBlock.innerHTML = ` 
        ${data.title}
  `
  ):(`<span>Loading...</span>`);
}

const clearInput = () => document.querySelector('#nl-question').value = '';

form.addEventListener('submit', postData);
form.addEventListener('submit', displayData);
form.addEventListener('submit', clearInput);

input.addEventListener('keydown', () => {
    reponseContainer.style.opacity = 0;
    reponseContainer.style.transition = 'all .5s ease-in-out';
})