const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/episodes', (req, res) => {
  const existsEpisodes = getEpisodesData();

  const newEpisodeData = req.body;
  const id = existsEpisodes.length;
  const newEpisode = { id, ...newEpisodeData };

  if (!newEpisode.text) {
    return res
      .status(401)
      .send({ error: true, msg: `${JSON.stringify(existsEpisodes)}, ${JSON.stringify(existsEpisodes.length)}` });
  }

  existsEpisodes.push(newEpisode);

  saveEpisode(existsEpisodes);
  res.send({ success: true, msg: 'New episode added successfully' });
});

app.get('/episodes', (req, res) => {
  const episodes = getEpisodesData();
  res.send(episodes);
});

const saveEpisode = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('episodes.json', stringifyData);
};

const getEpisodesData = () => {
  const jsonData = fs.readFileSync('episodes.json');
  return JSON.parse(jsonData);
};

app.listen(3000, () => {
  console.log('Server runs on port 3000');
});
