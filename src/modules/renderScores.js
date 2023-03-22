import data from './db.js';

const createScore = (element, i) => {
  const ul = document.querySelector('.information');
  const li = document.createElement('li');
  li.id = `score${i + 1}`;
  li.innerText = `${element.name} : ${element.score}`;
  ul.appendChild(li);
};

const renderList = () => {
  data.forEach((object, i) => {
    createScore(object, i);
  });
};
export default renderList;
