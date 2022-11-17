const express = require('express');
const fs = require('fs');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const saveEpisode = (data) => {
  const episodesData = JSON.stringify(data);
  fs.writeFileSync('episodes.json', episodesData);
};

const getEpisodesData = () => {
  const episodesData = fs.readFileSync('episodes.json');
  return JSON.parse(episodesData);
};

app.post('/episodes', (req, res) => {
  const existsEpisodes = getEpisodesData();

  const newEpisodeData = req.body;
  const id = existsEpisodes.length;
  const newEpisode = { id, ...newEpisodeData };

  if (!newEpisode.text) {
    return res.status(401).send({
      error: true,
      msg: `${JSON.stringify(existsEpisodes)}, ${JSON.stringify(
        existsEpisodes.length
      )}`,
    });
  }

  existsEpisodes.push(newEpisode);

  saveEpisode(existsEpisodes);
  res.send({ success: true, msg: 'New episode added successfully 💅🏾' });
});

app.get('/episodes', (req, res) => {
  const episodes = getEpisodesData();
  res.send(episodes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ✨`);
});
