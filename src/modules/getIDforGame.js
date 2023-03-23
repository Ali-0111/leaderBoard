const gameName = { name: 'GameApi' };

const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

//  first, choose the

const getID = async () => {
  const response = await fetch(apiLink, {
    method: 'POST',
    body: JSON.stringify(gameName),
    headers: {
      'content-type': 'application/json',
    },
  });

  const data = await response.json();
  return data.result;
};

export default getID;