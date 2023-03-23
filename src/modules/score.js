const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const gameId = 'tWWc6J44hphZFZiMCWFB';

const scoresLink = `${apiLink}/${gameId}/scores/`;

const send = (user, score) => {
  fetch(scoresLink, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
};

const download = async () => {
  const response = await fetch(scoresLink);
  const data = await response.json();
  return data.result;
};

export { send, download };