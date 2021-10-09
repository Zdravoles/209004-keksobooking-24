import {getRandomNumber} from './get-random-number.js';

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_TIMES = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const OFFER_TITLE = ['молодых котов', 'котов в расцвете лет', 'котих', 'кошек', 'котов с людьми'];
const OFFER_DES = ['своим великолепием', 'своей ценой и качеством', 'своими размерами', 'воображение'];
const OFFER_LAT_FROM = 35.65000;
const OFFER_LAT_TO = 35.70000;
const OFFER_LNG_FROM = 139.70000;
const OFFER_LNG_TO = 139.80000;


const createOffer = () => {
  const LAT = getRandomNumber(OFFER_LAT_FROM,OFFER_LAT_TO);
  const LNG = getRandomNumber(OFFER_LNG_FROM,OFFER_LNG_TO);

  return {
    author: {
      avatar: `img/avatars/user ${getRandomNumber(1,10)}.png`,
    },

    offer: {
      title: `Кексовое предложение для ${OFFER_TITLE[getRandomNumber(0,OFFER_TITLE.length-1)]}`,
      address: `${LAT},${LNG}`,
      price: getRandomNumber(1,9),
      type: OFFER_TYPE[getRandomNumber(0,OFFER_TYPE.length-1)],
      rooms: getRandomNumber(1,9),
      guests: getRandomNumber(1,9),
      checkin: OFFER_TIMES[getRandomNumber(0,OFFER_TIMES.length-1)],
      checkout: OFFER_TIMES[getRandomNumber(0,OFFER_TIMES.length-1)],
      features: OFFER_FEATURES.slice(getRandomNumber(0,OFFER_FEATURES.length-1)),
      description: `Этот объект недвижимости поражает ${OFFER_DES[getRandomNumber(0,OFFER_DES.length-1)]}. Сделайте себя счастливыми.`,
      photos: OFFER_PHOTOS[getRandomNumber(0,OFFER_PHOTOS.length-1)],
    },

    location: {
      lat: LAT,
      lng: LNG,
    },
  };

};

export {createOffer};
