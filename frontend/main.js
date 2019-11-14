const form = document.querySelector('form');
const sqlPrediction = document.querySelector('#sql-prediction');
const codeTag = document.querySelector('.monokai-sublime');
const copyBtn = document.querySelector('.copy-btn');
const inputNlQuestion = document.querySelector('#nl-question');
const inputDbSchema = document.querySelector('#db-schema');

const url = 'https://jsonplaceholder.typicode.com/posts/'



const postData = (e) => {
  e.preventDefault();
  const postOptions = {
    method: 'POST',
    body: JSON.stringify({
      question: `${inputNlQuestion.value}`,
      tableSchema: `${inputDbSchema.value}`
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };
  fetch(url, postOptions)
  .then(response => response.json())
  .then(data => {
    codeTag.textContent = `${data.question} ${data.tableSchema}`;
    document.querySelectorAll('pre, code').forEach(block => {
      hljs.highlightBlock(block);
    });
    sqlPrediction.style.opacity = 1;
    sqlPrediction.style.transition = 'all .5s ease-in-out';
    inputNlQuestion.value = ''
    inputDbSchema.value = ''
  })
}

const copyToClipboard = () => {
  const preTagContent = document.querySelector('#pre-sql').textContent;
  const textArea = document.createElement('textarea');
  textArea.textContent = preTagContent;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.classList.add('d-none');
}




form.addEventListener('submit', postData);
copyBtn.addEventListener('click', copyToClipboard);
