const getRandomInt = (max) => Math.floor(Math.random() * max);

const addZero = (i) => {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
};

const getTitle = () => {
  const d = new Date();
  let day = addZero(d.getDate());
  let month = addZero(d.getMonth());
  let year = addZero(d.getFullYear());

  let hour = addZero(d.getHours());
  let minute = addZero(d.getMinutes());
  let second = addZero(d.getSeconds());
  return `${day}${month}${year}${hour}${minute}${second}`;
};

const shuffleWords = (words) => {
  let currentIndex = words.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [words[currentIndex], words[randomIndex]] = [
      words[randomIndex], words[currentIndex]];
  }

  return words;
}