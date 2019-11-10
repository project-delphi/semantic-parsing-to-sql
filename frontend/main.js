const form = document.querySelector('form');
const h4 = document.querySelector('h4');
const input = document.querySelector('#nl-question');
const codeBlock = document.querySelector('.monokai-sublime');

const postData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify({
      title: `foo`,
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displaySqlData(data)
  })
}

const displayData = (e) => {
  e.preventDefault();
  codeBlock.style.opacity = 1;
  codeBlock.style.transition = 'all .5s ease-in-out';
  displaySqlData();
}

const displaySqlData = (data) => {
  data ? (
    codeBlock.textContent = `${JSON.stringify(data) }`)
    :(`<span>Loading...</span>`);
}

const clearInput = () => document.querySelector('#nl-question').value = '';

form.addEventListener('submit', postData);
form.addEventListener('submit', displayData);
form.addEventListener('submit', clearInput);

input.addEventListener('keydown', () => {
    codeBlock.style.opacity = 0;
    codeBlock.style.transition = 'all .5s ease-in-out';
})