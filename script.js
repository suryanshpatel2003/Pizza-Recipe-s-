// main.js
import { recipes } from './recipes.js';

const buttons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalTitle');
const modalRecipe = document.getElementById('modalRecipe');
const closeBtn = document.querySelector('.close');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const pizzaName = card.querySelector('h2').innerText;

    modalTitle.innerText = pizzaName;
    modalRecipe.innerText = recipes[pizzaName];

    modal.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => modal.style.display = "none");
window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = "none"; });