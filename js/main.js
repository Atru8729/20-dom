const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

console.log(logoDOM);
console.log(hamburgerDOM);

hamburgerDOM.addEventListener('click', () => {
    logDOM.classList.toggle('big');
})