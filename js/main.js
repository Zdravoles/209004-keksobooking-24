import {OFFER_COUNT, DEFAULT_AVATAR} from './mock.js';
import {dataSet} from './get-data.js';
import {setStatusPageOn, setStatusPageOff} from './status-page.js';
import './check-form.js';
import {map, getMapInitCoords, setMapPoints, mapReset} from './map.js';
import './filters.js';
import './upload.js';
import {sendFormData} from './send-data.js';

const cardTemplateNode = document.querySelector('#card').content;
const formNode = document.querySelector('.ad-form');
const filtersAreaNode = document.querySelector('.map__filters');

setStatusPageOff();
if (map.on('load')) {
  setStatusPageOn();
  getMapInitCoords();
  dataSet.then((data) => {
    const OFFERS = data.slice(0,OFFER_COUNT);
    setMapPoints(OFFERS,cardTemplateNode);
  });
  dataSet.catch((error) => {
    const messageNode = document.querySelector('#error-fetch').content.cloneNode(true);
    messageNode.querySelector('.error-text').textContent = error;
    document.body.appendChild(messageNode);

    const btnCloseNode = document.querySelector('.error__button-fetch');
    btnCloseNode.addEventListener('click', () => {
      const messageAreaNode = document.querySelector('.error-fetch');
      messageAreaNode.classList.add('visually-hidden');
    });
  });
}

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData(formNode);
});

formNode.addEventListener('reset', () => {
  mapReset();
  filtersAreaNode.reset();
  dataSet.then((data) => {
    const OFFERS = data.slice(0,OFFER_COUNT);
    setMapPoints(OFFERS,cardTemplateNode);
  });
  const addressInputFieldNode = document.querySelector('#address');
  addressInputFieldNode.placeholder = addressInputFieldNode.value;
  if (document.querySelector('.ad-form-header__preview img')) {
    document.querySelector('.ad-form-header__preview img').src = DEFAULT_AVATAR;
  }
  if (document.querySelector('.ad-form__photo img')) {
    document.querySelector('.ad-form__photo img').remove();
  }
});
