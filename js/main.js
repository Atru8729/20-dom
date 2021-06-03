let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');

minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Žaidimas progrese';
})

plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Žaidimas progrese';
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Te prasideda žaidynės! 🥳';
})

h1DOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
})
