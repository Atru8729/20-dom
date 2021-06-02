/*
Surasti visus ingredientus ir ju pavadinimus atspausdinti i console

Visu ingredientu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console

*/

const liDOM = document.querySelectorAll('li');
const ingredientai = [];
for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText.toUpperCase();
    ingredientai.push(ingredientas);
}

console.log(ingredientai);