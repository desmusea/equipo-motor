const wordsWrapper = document.getElementById('wordsWrapper');
const episode = document.querySelector('#episode');
const main = document.getElementById('main');
const episodesList = document.querySelector('#episodesList');
const title = document.querySelector('#title');
const episodeWrapper = document.querySelector('#episodeWrapper');
const saveEpisodeButton = document.querySelector('#saveEpisodeButton');
const links = document.querySelector('#links');
const menuItems = document.querySelectorAll('.menu--list__item-button');
const loader = document.querySelector('#loader');
const successMessage = document.querySelector('#successMessage');
const aboutWrapper = document.querySelector('#aboutWrapper');

let episodesTitle;
let finalText;
let episodeName;
let displayedInfoId;

const { start, end, experiences, words } = sentences;
const { equipoMotor, instructions, episodes } = about;
const wordsAvailable = Object.keys(words);

let selectedWords = [];

const scrollTo = (hash) => (location.hash = '#' + hash);

const toggleMenuItemsStatus = (id) => {
  switch (id) {
    case 'equipoMotor':
      menuItems[0].classList.add('selected');
      menuItems[1].classList.remove('selected');
      menuItems[2].classList.remove('selected');
      menuItems[3].classList.remove('selected');
      break;
    case 'episodes':
      menuItems[1].classList.add('selected');
      menuItems[0].classList.remove('selected');
      menuItems[2].classList.remove('selected');
      menuItems[3].classList.remove('selected');
      break;
    case 'instructions':
      menuItems[0].classList.remove('selected');
      menuItems[1].classList.remove('selected');
      menuItems[2].classList.add('selected');
      menuItems[3].classList.remove('selected');
      break;
    default:
      menuItems[0].classList.remove('selected');
      menuItems[1].classList.remove('selected');
      menuItems[2].classList.remove('selected');
      menuItems[3].classList.add('selected');
      aboutWrapper.innerHTML = null;
  }
};

const displayInfo = (id) => {
  unselectWords();
  episodesList.classList.add('hidden');
  episodeWrapper.classList.add('hidden');
  if (displayedInfoId === id) {
    aboutWrapper.innerHTML = '';
    unselectMenuItems();
    displayedInfoId = '';
  } else {
    aboutWrapper.innerHTML = about[id];
    toggleMenuItemsStatus(id);
    displayedInfoId = id;
  }
};

const unselectMenuItems = () => {
  menuItems[0].classList.remove('selected');
  menuItems[1].classList.remove('selected');
  menuItems[2].classList.remove('selected');
};

const sortSentencesRandomly = (sentences) => {
  let randomlySortedSentence = '';
  let currentSentences = [...sentences];
  sentences.forEach(() => {
    const randomNumber = getRandomInt(currentSentences.length);
    const sentence = currentSentences[randomNumber];
    currentSentences = currentSentences.filter((item) => item !== sentence);
    randomlySortedSentence = `${randomlySortedSentence} ${sentence}`;
  });
  return randomlySortedSentence;
};

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
  const innerSentences = [randomExp, sentence1, sentence2, sentence3];
  const randomlySortedSentences = sortSentencesRandomly(innerSentences);

  finalText = ` ${randomStart} ${randomlySortedSentences} ${randomEnd}`;
  episodesTitle = getTitle();
  episode.innerHTML = finalText;
  title.innerHTML = `<span class="dot"></span> episodio.TXT — ${episodesTitle} `;

  if (episodeName) {
    title.innerHTML += episodeNameNode;
  }

  const width = wordsWrapper.clientWidth;
  const isMobile = width <= 768;
  if (isMobile) {
    scrollTo('episodeWrapper');
  }
};

const addLink = (sentence, url, key) => {
  const sentenceWithLink = sentence.replace(
    key,
    `<a href=${url} target="_blank"> ${key}</a>`
  );
  return `${sentenceWithLink}`;
};

const resetEpisode = () => {
  saveEpisodeButton.classList.add('hidden');
  finalText = '';
  episode.innerHTML = '';
  title.innerHTML = '';
};

const removeWord = (word) => {
  selectedWords = selectedWords.filter((w) => w !== word);
  const currentNode = document.getElementById(word);
  currentNode.classList.remove('blue');
};

const selectWord = (word) =>
  selectedWords.includes(word) ? removeWord(word) : selectedWords.push(word);

const unselectWords = () => selectedWords.forEach((word) => removeWord(word));

const addWord = (word) => {
  aboutWrapper.innerHTML = '';
  unselectMenuItems();
  successMessage.classList.add('hidden');
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
    resetEpisode();
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
  successMessage.classList.add('hidden');
  loader.classList.add('hidden');

  if (episodesList.classList.contains('hidden')) {
    toggleMenuItemsStatus();
    episodeWrapper.classList.add('hidden');
    saveEpisodeButton.classList.add('hidden');
    episodesList.classList.remove('hidden');
    episodesList.innerHTML = '';
    episodes
      .slice(0)
      .reverse()
      .map((episode) => {
        episodesList.innerHTML += `<li><span><span class="dot"></span> episodio.TXT #${episode.id} — ${episode.title}</span><br><br> ${episode.text}<li></br><br>`;
      });
  } else {
    episodesList.classList.add('hidden');
    menuItems[3].classList.remove('selected');
  }
};

const getEpisodes = () => {
  successMessage.classList.add('hidden');
  loader.textContent = 'Cargando episodios...';
  loader.classList.remove('hidden');
  fetchEpisodes(setEpisodes);
};

const postEpisode = () => {
  loader.textContent = 'Guardando tu episodio...';
  loader.classList.remove('hidden');
  episode.innerHTML = null;
  saveEpisodeButton.classList.add('hidden');
  title.innerHTML = null;
  unselectWords();
  saveEpisode('https://equipomotor.onrender.com/episodes', {
    text: finalText,
    title: episodesTitle,
  }).then(() => {
    loader.classList.add('hidden');
    successMessage.classList.remove('hidden');
  });
};

createWordsNodes();
