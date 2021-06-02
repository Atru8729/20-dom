/*
Surasti h1 (antraste)
Prideti prie jos CSS class, kuri pakeicia teksto spalva i raudona

Surasti visus ingredientus
Kiekvienam ingredientui prideti CSS class pavadinimu darzove

*/



const liDOM = document.querySelectorAll('li');

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = 'Israuta darzove';
}
