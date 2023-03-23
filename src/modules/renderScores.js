const renderList = (data) => {
  const ul = document.querySelector('.information');
  ul.innerHTML = '';
  let newElements = '';
  data.forEach((object, i) => {
    newElements
    += `<li id="score${i + 1}"> ${object.user} : ${object.score}</li>`;
  });
  ul.innerHTML = newElements;
};

export default renderList;
