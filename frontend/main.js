// selectors
const form = document.querySelector('form');
const h4 = document.querySelector('h4');
const inputNlQuestion = document.querySelector('#nl-question');
const inputDbSchema = document.querySelector('#db-schema');
const sqlPrediction = document.querySelector('#sql-prediction');
const codeTag = document.querySelector('.monokai-sublime');
const copyBtn = document.querySelector('.copy-btn');

// functions
const getQuery = (e) => {

  e.preventDefault();
  fetch(`https://jsonplaceholder.typicode.com/posts/${inputNlQuestion.value}`)
    .then(response => response.json())
    .then(data => {
      codeTag.innerHTML = `${JSON.stringify(data)}`;
      sqlPrediction.style.opacity = 1;
      sqlPrediction.style.transition = 'all .5s ease-in-out';
    })    
  }

// const postData = (e) => {
//   e.preventDefault();
//   fetch('https://jsonplaceholder.typicode.com/posts/', {
//     headers: { "Content-Type": "application/json; charset=utf-8" },
//     method: 'POST',
//     body: JSON.stringify({
//       title: `${ inputNlQuestion.value }`,
//       body: `${ inputDbSchema.value }`
//     })
//   })
//   .then(response => response.json())
//   .then(data => {
//     codeTag.textContent = `${JSON.stringify(data)}`
//     sqlPrediction.style.opacity = 1;
//     sqlPrediction.style.transition = 'all .5s ease-in-out';
//   })
// }

const clearInput = () => {
  inputNlQuestion.value = ''
  inputDbSchema.value = ''
};

const copyToClipboard = () => {
  const preTagContent = document.querySelector('#pre-sql').textContent;
  const textArea = document.createElement('textarea');
  textArea.textContent = preTagContent;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.classList.add('d-none');
}

// hook events
form.addEventListener('submit', getQuery);
// form.addEventListener('submit', postData);
form.addEventListener('submit', clearInput);

inputNlQuestion.addEventListener('keydown', () => {
    sqlPrediction.style.opacity = 0;
    sqlPrediction.style.transition = 'all .5s ease-in-out';
})

copyBtn.addEventListener('click', copyToClipboard);

$(document).ready(function() {
  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
});