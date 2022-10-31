const wordsWrapper = document.getElementById('wordsWrapper');
const startSentence = document.getElementById('start');
const endSentence = document.getElementById('end');
const textNode0 = document.querySelector('#textNode0');
const textNode1 = document.querySelector('#textNode1');
const textNode2 = document.querySelector('#textNode2');
const textNode3 = document.querySelector('#textNode3');
const links = document.querySelector('#links');
const episode = document.querySelector('#episode');

const main = document.getElementById('main');
const sidebar1 = document.getElementById('sidebar1');
const icon1 = document.querySelector('#icon1');
const sidebar1Text = document.querySelector('#sidebar1Text');

const sidebar2 = document.getElementById('sidebar2');
const icon2 = document.querySelector('#icon2');
const sidebar2Text = document.querySelector('#sidebar2Text');

const sidebar3 = document.getElementById('sidebar3');
const icon3 = document.querySelector('#icon3');
const sidebar3Text = document.querySelector('#sidebar3Text');

const title = document.querySelector('#title');
let authorsName;
let episodeName;
let isOpen = { side1: false, side2: false };
const { start, end, experiences, words } = data;
const wordsAvailable = Object.keys(words);

let selectedWords = [];

const getRandomInt = (max) => Math.floor(Math.random() * max);

const createEpisode = () => {
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

  startSentence.innerText = `${randomStart} `;
  endSentence.innerText = `${randomEnd} `;
  textNode0.innerHTML = randomExp;
  textNode1.innerHTML = sentence1;
  textNode2.innerHTML = sentence2;
  textNode3.innerHTML = sentence3;
  const episodeNameNode = `<span class="episodeName"> ${episodeName}<span>`;
  const authorsNameNode = ` <br/><span class="authorsName">${authorsName}<span>`;

  title.innerHTML = `Episodio 1.`;

  if (episodeName) {
    title.innerHTML += episodeNameNode;
  }
  if (authorsName) {
    title.innerHTML += authorsNameNode;
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
};

const removeWord = (word) => {
  selectedWords = selectedWords.filter((w) => w !== word);
  const currentNode = document.getElementById(word);
  currentNode.classList.remove('red');
};

const selectWord = (word) =>
  selectedWords.includes(word) ? removeWord(word) : selectedWords.push(word);

const addWord = (word) => {
  const currentWord = document.getElementById(word);
  currentWord.classList += ' red';
  if (selectedWords.length < 2) {
    selectWord(word);
  } else if (selectedWords.length === 2) {
    selectWord(word);
    if (selectedWords.length === 3) {
      createEpisode();
    }
  } else if (selectedWords.length === 3) {
    const selectedNodes = document.querySelectorAll('.red');
    selectedNodes.forEach((node) => node.classList.remove('red'));
    resetText();
    selectedWords = [];
    selectedWords.push(word);
    currentWord.classList += ' red';
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

const setAuthorsName = (name) => (authorsName = name ? `${name}. ` : '');
const setEpisodeName = (name) => (episodeName = name ? `${name}. ` : '');

const toggleNav = (id) => {
  isOpen[id] ? closeNav(id) : openNav(id);
  isOpen[id] = !isOpen[id];
};

const openNav = (id) => {
  if (id === 'side1') {
    sidebar1.style.width = '500px';
    sidebar1Text.style.display = 'block';
    icon1.style.display = 'none';
    links.style.display = 'flex';
    wordsWrapper.style.paddingLeft = '570px';
  }
  if (id === 'side2') {
    closeNav('side1');
    sidebar2.style.width = '600px';
    sidebar2Text.style.display = 'block';
    icon2.style.display = 'none';
    wordsWrapper.style.paddingLeft = '630px';
  }
  if (id === 'side3') {
    closeNav('side2');
    closeNav('side1');
    sidebar3.style.width = '580px';
    sidebar3Text.style.display = 'block';
    icon3.style.display = 'none';
  }
};

const closeNav = (id) => {
  if (id === 'side1') {
    sidebar1Text.style.display = 'none';
    sidebar1.style.width = '30px';
    sidebar2.style.width = '80px';
    sidebar2Text.style.display = 'none';
    icon1.style.display = 'block';
    links.style.display = 'none';
    icon2.style.display = 'block';
  }
  if (id === 'side2') {
    closeNav('side1');
    sidebar2Text.style.display = 'none';
    sidebar2.style.width = '80px';
    icon2.style.display = 'block';
  }
  if (id === 'side3') {
    closeNav('side2');
    closeNav('side1');
    sidebar3Text.style.display = 'none';
    sidebar3.style.width = '130px';
    icon3.style.display = 'block';
  }

  wordsWrapper.style.paddingLeft = '165px';
};

createWordsNodes();
