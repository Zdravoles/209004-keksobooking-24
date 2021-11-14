import {dataSet} from './get-data.js';
import {OFFER_COUNT} from './mock.js';
import {setMapPoints, mapReset} from './map.js';
import {debounce} from './utils/debounce.js';

const FILTER_PRICE_MIN = 0;
const FILTER_PRICE_MAX = Infinity;
const FILTER_PRICE_MAX_LOW = 10000;
const FILTER_PRICE_MAX_MIDDLE = 50000;
const FILTER_PREF_ANY = 'any';
const RERENDER_DELAY = 500;
const RANK_MAX = 4;

const cardTemplate = document.querySelector('#card').content;
const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRooms = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');
const filterHousingFeatures = document.querySelector('#housing-features');

const compareOffers = (offerA, offerB) => offerB.offer.rank - offerA.offer.rank;

const setFiltersPoints = (offers) => {
  const offerType = filterHousingType.options[filterHousingType.selectedIndex].value;
  const offerPrice = filterHousingPrice.options[filterHousingPrice.selectedIndex].value;
  const offerRoom = filterHousingRooms.options[filterHousingRooms.selectedIndex].value;
  const offerGuests = filterHousingGuests.options[filterHousingGuests.selectedIndex].value;
  const offerFeatures = filterHousingFeatures.querySelectorAll('input');
  const selectedOffers = [];

  let priceMin = FILTER_PRICE_MIN;
  let priceMax = FILTER_PRICE_MAX;
  let countRooms = offerRoom;
  mapReset();

  if (offerPrice === 'low') {
    priceMax = FILTER_PRICE_MAX_LOW;
  }
  if (offerPrice === 'middle') {
    priceMin = FILTER_PRICE_MAX_LOW;
    priceMax = FILTER_PRICE_MAX_MIDDLE;
  }
  if (offerPrice === 'high') {
    priceMin = FILTER_PRICE_MAX_MIDDLE;
  }

  const filteredOffers = offers.filter((offer) => {
    if (offer.offer.features) {
      for (const feature of offerFeatures) {
        if (feature.checked) {
          if (offer.offer.features.includes(feature.value)) {
            return true;
          }
        }
      }
    }
  });

  if (filteredOffers.length > 1) {
    offers = filteredOffers;
  }

  for (let count = 0; count < offers.length-1; count++) {
    offers[count].offer.rank = 0;

    if (offers[count].offer.type === offerType || offerType === FILTER_PREF_ANY) {
      offers[count].offer.rank++;
    }

    if (offers[count].offer.price >= priceMin && offers[count].offer.price <= priceMax) {
      offers[count].offer.rank++;
    }

    if (offerRoom !== FILTER_PREF_ANY) {
      countRooms = Number(offerRoom);
    }
    if (offers[count].offer.rooms === countRooms || countRooms === FILTER_PREF_ANY) {
      offers[count].offer.rank++;
    }

    if (offers[count].offer.guests === Number(offerGuests) || offerGuests === FILTER_PREF_ANY) {
      offers[count].offer.rank++;
    }

    if (offers[count].offer.rank === RANK_MAX) {
      selectedOffers.push(offers[count]);
      if (selectedOffers.length === OFFER_COUNT) {
        break;
      }
    }
  }

  selectedOffers.sort(compareOffers);

  setMapPoints(selectedOffers,cardTemplate);
};

dataSet.then((data) => {
  const ALL_OFFERS = data;

  filterHousingType.addEventListener('change', debounce(
    () => setFiltersPoints(ALL_OFFERS),
    RERENDER_DELAY,
  ));

  filterHousingPrice.addEventListener('change', debounce(
    () => setFiltersPoints(ALL_OFFERS),
    RERENDER_DELAY,
  ));

  filterHousingRooms.addEventListener('change', debounce(
    () => setFiltersPoints(ALL_OFFERS),
    RERENDER_DELAY,
  ));

  filterHousingGuests.addEventListener('change', debounce(
    () => setFiltersPoints(ALL_OFFERS),
    RERENDER_DELAY,
  ));

  filterHousingFeatures.addEventListener('click', debounce(
    (evt) => {
      if (evt.target.nodeName === 'INPUT') {
        setFiltersPoints(ALL_OFFERS);
      }
    },
    RERENDER_DELAY,
  ));

});
