import './style.css';
import renderList from './modules/renderScores.js';
import { send, download } from './modules/score.js';
import data from './modules/db.js';

renderList(data);

const scoreInput = document.querySelector('.score');
const nameInput = document.querySelector('.name');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

const clear = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submitBtn.onclick = (e) => {
  e.preventDefault();
  send(nameInput.value, scoreInput.value);
  clear();
};

refreshBtn.onclick = () => {
  download()
    .then((data) => {
      data = [...data];
      renderList(data);
    });
};