function getRandomNumber(from,to) {
  if (from >= to) {
    return false;
  }
  if (from >= 0) {
    let number = Math.random();
    number = Math.floor(number*(to - from+1)+from);
    return number;
  }
}

getRandomNumber(0,5);

function getRandomNumberFloat(from,to,count) {
  if (from >= to) {
    return false;
  }
  if (from >= 0) {
    let number = Math.random();
    number = number*(to - from+1)+from;
    return Number(number.toFixed(count));
  }
}

getRandomNumberFloat(0.5,6,5);
