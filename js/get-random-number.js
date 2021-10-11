const getRandomNumber = (from,to) => {
  if (from >= to) {
    return false;
  }
  if (from >= 0) {
    let number = Math.random();
    number = Math.floor(number*(to - from+1)+from);
    return number;
  }
};

const getRandomNumberFloat = (from,to,count) => {
  if (from >= to) {
    return false;
  }
  if (from >= 0) {
    let number = Math.random();
    number = number*(to - from+1)+from;
    return Number(number.toFixed(count));
  }
};

export {getRandomNumber, getRandomNumberFloat};
