const wordsWrapper = document.getElementById('wordsWrapper');
const episode = document.querySelector('#episode');
const links = document.querySelector('#links');
const info = document.querySelector('#info');
const main = document.getElementById('main');
const sideModal1 = document.getElementById('sideModal1');
const icon1 = document.querySelector('#icon1');
const sideModal1Text = document.querySelector('#sideModal1Text');
const episodeslist = document.querySelector('#episodeslist');
const sideModal2 = document.getElementById('sideModal2');
const icon2 = document.querySelector('#icon2');
const sideModal2Text = document.querySelector('#sideModal2Text');
const sideModal3 = document.getElementById('sideModal3');
const icon3 = document.querySelector('#icon3');
const sideModal3Text = document.querySelector('#sideModal3Text');
const title = document.querySelector('#title');

let episodesTitle;
let finalText;
let episodeName;
let isOpen = { side1: false, side2: false };

const { start, end, experiences, words } = data;
const wordsAvailable = Object.keys(words);

let selectedWords = [];

const createEpisode = () => {
  info.style.display = 'none';

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

  const episodeNameNode = `<span class="episodeName"> ${episodeName}<span>`;
  finalText = `${randomStart} ${randomExp} ${sentence1} ${sentence2} ${sentence3} ${randomEnd}`;
  episodesTitle = getTitle();
  episode.innerHTML = finalText;
  title.innerHTML = episodesTitle;

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
  startSentence.innerText = '';
  endSentence.innerText = '';
  textNode0.innerHTML = '';
  textNode1.innerHTML = '';
  textNode2.innerHTML = '';
  textNode3.innerHTML = '';
  title.innerHTML = '';
  info.style.display = 'block';
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
    const span = document.createElement('span');
    span.innerText = word;
    span.onclick = () => addWord(word);
    span.className = 'word';
    span.id = word;

    return wordsWrapper.appendChild(span);
  });
};

const setEpisodeName = (name) => (episodeName = name ? `${name}. ` : '');

const toggleNav = (id) => {
  isOpen[id] ? closeNav(id) : openNav(id);
  isOpen[id] = !isOpen[id];
};

const openNav = (id) => {
  if (id === 'side1') {
    sideModal1.style.width = '500px';
    sideModal1Text.style.display = 'block';
    icon1.style.display = 'none';
    links.style.display = 'flex';
    wordsWrapper.style.paddingLeft = '570px';
  }
  if (id === 'side2') {
    closeNav('side1');
    sideModal2.style.width = '600px';
    sideModal2Text.style.display = 'block';
    icon2.style.display = 'none';
    wordsWrapper.style.paddingLeft = '630px';
  }
  if (id === 'side3') {
    closeNav('side2');
    closeNav('side1');
    sideModal3.style.width = '580px';
    sideModal3Text.style.display = 'block';
    icon3.style.display = 'none';
  }
};

const closeNav = (id) => {
  if (id === 'side1') {
    sideModal1Text.style.display = 'none';
    sideModal1.style.width = '30px';
    sideModal2.style.width = '80px';
    sideModal2Text.style.display = 'none';
    icon1.style.display = 'block';
    links.style.display = 'none';
    icon2.style.display = 'block';
  }
  if (id === 'side2') {
    closeNav('side1');
    sideModal2Text.style.display = 'none';
    sideModal2.style.width = '80px';
    icon2.style.display = 'block';
  }
  if (id === 'side3') {
    closeNav('side2');
    closeNav('side1');
    sideModal3Text.style.display = 'none';
    sideModal3.style.width = '130px';
    icon3.style.display = 'block';
  }

  wordsWrapper.style.paddingLeft = '165px';
};

const setEpisodes = (episodes) =>
  episodes.map((episode) => {
    episodeslist.innerHTML += `<div><span>${episode.title}</span><br>${episode.text}<div></br>`;
  });

const getEpisodes = () => fetchEpisodes(setEpisodes);

const postEpisode = () =>
  saveEpisode('http://localhost:3000/episodes', {
    text: finalText,
    title: episodesTitle,
  });

createWordsNodes();
