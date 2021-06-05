const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');
const inputBgColorDOM = document.querySelector('#bg-color');
const inputTextColorDOM = document.querySelector('#text-color');

inputDOM.style.color = 'red';



buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
    spanDOM.style.backgroundColor = inputBgColorDOM.value;
    spanDOM.style.color = inputTextColorDOM.value;

})