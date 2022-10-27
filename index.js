const wordsWrapper = document.getElementById('wordsWrapper');
const startSentence = document.getElementById('start');
const endSentence = document.getElementById('end');
const textNode0 = document.querySelector('#textNode0');
const textNode1 = document.querySelector('#textNode1');
const textNode2 = document.querySelector('#textNode2');
const textNode3 = document.querySelector('#textNode3');
const title = document.querySelector('#title');
let authorsName;
let episodeName;

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
  const sentence1 = addLink(
    words[word1][0].sentence,
    words[word1][0].url,
    words[word1][0].key
  );
  const sentence2 = addLink(
    words[word2][0].sentence,
    words[word2][0].url,
    words[word2][0].key
  );
  const sentence3 = addLink(
    words[word3][0].sentence,
    words[word3][0].url,
    words[word3][0].key
  );

  startSentence.innerText = `${randomStart} `;
  endSentence.innerText = `${randomEnd} `;
  textNode0.innerHTML = randomExp;
  textNode1.innerHTML = sentence1;
  textNode2.innerHTML = sentence2;
  textNode3.innerHTML = sentence3;
  const episodeNameNode = `<span class="episodeName"> ${episodeName}<span>`;
  const authorsNameNode = ` <br/><span class="authorsName">${authorsName}<span>`;

  title.innerHTML = `Episodio 1. <br/>`;

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

createWordsNodes();
