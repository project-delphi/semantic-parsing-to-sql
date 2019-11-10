const form = document.getElementsByTagName('form');
// console.log('form', form);

// const postData = (e) => {
//     e.preventDefault();
//     console.log('send to google colaboratory')
// }



function sConsole(event) {
    event.preventDefault();
    const input = document.querySelector('.question');
    console.log(input.value);
    
  }


form.addEventListener('submit', sConsole)