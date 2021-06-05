const buttonDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    orderDOM.innerText = 'Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo, [nori/nenori] deserto ir [gerymo pavadinimas] yra pasirinktas gerymas.'
});