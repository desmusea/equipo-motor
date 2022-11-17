const fetchEpisodes = (action) => {
  fetch('https://equipomotor.onrender.com/')
    .then((response) => response.json())
    .then((data) => action(data));
};

const saveEpisode = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
