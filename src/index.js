import './style.css';
import renderList from './modules/renderScores.js';

renderList();

const scoreInput = document.querySelector('.score');
const nameInput = document.querySelector('.name');
const submitBtn = document.querySelector('.submit-btn');
submitBtn.onclick = (e) => {
  e.preventDefault();
  nameInput.value = '';
  scoreInput.value = '';
};