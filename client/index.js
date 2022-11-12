const wordsWrapper = document.getElementById('wordsWrapper');
const episode = document.querySelector('#episode');
const main = document.getElementById('main');
const episodesList = document.querySelector('#episodesList');
const title = document.querySelector('#title');
const episodeWrapper = document.querySelector('#episodeWrapper');
const saveEpisodeButton = document.querySelector('#saveEpisodeButton');

let episodesTitle;
let finalText;
let episodeName;

const { start, end, experiences, words } = data;
const wordsAvailable = Object.keys(words);

let selectedWords = [];

const createEpisode = () => {
  episodesList.classList.add('hidden');
  episodeWrapper.classList.remove('hidden');
  saveEpisodeButton.classList.remove('hidden');

  const randomeStartIdx = getRandomInt(start.length);
  const randomStart = start[randomeStartIdx];
  const randomeEndIdx = getRandomInt(end.length);
  const randomEnd = end[randomeEndIdx];
  const randomeExpIdx = getRandomInt(experiences.length);
  const randomExp = experiences[randomeExpIdx];
  const word1 = selectedWords[0];
  const word2 = selectedWords[1];
  const word3 = selectedWords[2];

  const word1Idx = getRandomInt(words[word1].length);
  const word2Idx = getRandomInt(words[word2].length);
  const word3Idx = getRandomInt(words[word3].length);

  const sentence1 = addLink(
    words[word1][word1Idx].sentence,
    words[word1][word1Idx].url,
    words[word1][word1Idx].key
  );
  const sentence2 = addLink(
    words[word2][word2Idx].sentence,
    words[word2][word2Idx].url,
    words[word2][word2Idx].key
  );
  const sentence3 = addLink(
    words[word3][word3Idx].sentence,
    words[word3][word3Idx].url,
    words[word3][word3Idx].key
  );

  const episodeNameNode = `<span class="episodeName"> ${episodeName} — <span>`;
  finalText = ` ${randomStart} ${randomExp} ${sentence1} ${sentence2} ${sentence3} ${randomEnd}`;
  episodesTitle = getTitle();
  episode.innerHTML = `<span class="dot"></span> ${finalText}`;
  title.innerHTML = `episodio.TXT — ${episodesTitle} `;

  if (episodeName) {
    title.innerHTML += episodeNameNode;
  }
};

const addLink = (sentence, url, key) => {
  const sentenceWithLink = sentence.replace(
    key,
    `<a href=${url} target="_blank"> ${key}</a>`
  );
  return `${sentenceWithLink}`;
};

const resetText = () => {
  finalText = '';
  title.innerHTML = '';
};

const removeWord = (word) => {
  selectedWords = selectedWords.filter((w) => w !== word);
  const currentNode = document.getElementById(word);
  currentNode.classList.remove('blue');
};

const selectWord = (word) =>
  selectedWords.includes(word) ? removeWord(word) : selectedWords.push(word);

const addWord = (word) => {
  const currentWord = document.getElementById(word);
  currentWord.classList += ' blue';
  if (selectedWords.length < 2) {
    selectWord(word);
  } else if (selectedWords.length === 2) {
    selectWord(word);
    if (selectedWords.length === 3) {
      createEpisode();
    }
  } else if (selectedWords.length === 3) {
    const selectedNodes = document.querySelectorAll('.blue');
    selectedNodes.forEach((node) => node.classList.remove('blue'));
    resetText();
    selectedWords = [];
    selectedWords.push(word);
    currentWord.classList += ' blue';
  }
};

const createWordsNodes = () => {
  wordsAvailable.forEach((word) => {
    const li = document.createElement('li');
    li.innerText = word;
    li.onclick = () => addWord(word);
    li.className = 'word';
    li.id = word;

    return wordsWrapper.appendChild(li);
  });
};

const setEpisodeName = (name) => (episodeName = name ? `${name}. ` : '');

const setEpisodes = (episodes) => {
  episodeWrapper.classList.add('hidden');
  saveEpisodeButton.classList.add('hidden');
  episodesList.classList.remove('hidden');
  episodesList.innerHTML = '';
  episodes.map((episode) => {
    episodesList.innerHTML += `<div><span>episodio.TXT #${episode.id} — ${episode.title}</span><br><span class="dot"></span> ${episode.text}<div></br>`;
  });
};

const getEpisodes = () => fetchEpisodes(setEpisodes);

const postEpisode = () =>
  saveEpisode('http://localhost:3000/episodes', {
    text: finalText,
    title: episodesTitle,
  });

createWordsNodes();
