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

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_CHECKIN = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUT = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const OFFER_TITLE = ['молодых котов', 'котов в расцвете лет', 'котих', 'кошек', 'котов с людьми'];
const OFFER_DES = ['своим великолепием', 'своей ценой и качеством', 'своими размерами', 'воображение'];

const createOffer = () => {
  const LAT = getRandomNumber(35.65000,35.70000);
  const LNG = getRandomNumber(139.70000,139.80000);

  return {
    autor: {
      avatar: `img/avatars/user ${getRandomNumber(1,10)}.png`,
    },

    offer: {
      title: `Кексовое предложение для ${OFFER_TITLE[getRandomNumber(0,OFFER_TITLE.length-1)]}`,
      address: `${LAT},${LNG}`,
      price: getRandomNumber(1,9),
      type: OFFER_TYPE[getRandomNumber(0,OFFER_TYPE.length-1)],
      rooms: getRandomNumber(1,9),
      guests: getRandomNumber(1,9),
      checkin: OFFER_CHECKIN[getRandomNumber(0,OFFER_CHECKIN.length-1)],
      checkout: OFFER_CHECKOUT[getRandomNumber(0,OFFER_CHECKOUT.length-1)],
      features: OFFER_FEATURES[getRandomNumber(0,OFFER_FEATURES.length-1)],
      description: `Этот объект недвижимости поражает ${OFFER_DES[getRandomNumber(0,OFFER_DES.length-1)]}. Сделайте себя счастливыми.`,
      photos: OFFER_PHOTOS[getRandomNumber(0,OFFER_PHOTOS.length-1)],
    },

    location: {
      lat: LAT,
      lng: LNG,
    },
  };

};

const OFFERS = Array.from({length: 10}, createOffer);

document.innerHTML = OFFERS; // это для линтера
