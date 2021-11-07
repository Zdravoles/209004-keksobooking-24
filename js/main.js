import {dataSet} from './get-data.js';
import {setStatusPageOn, setStatusPageOff} from './status-page.js';
import './check-form.js';
import {map, getMapInitCoords, setMapPoints, mapReset} from './map.js';
import {sendFormData} from './send-data.js';

const OFFER_COUNT = 10;
const cardTemplate = document.querySelector('#card').content;
const form = document.querySelector('.ad-form');

setStatusPageOff();
if (map.on('load')) {
  setStatusPageOn();
  getMapInitCoords();
  dataSet.then((data) => {
    const OFFERS = data.slice(0,OFFER_COUNT);
    setMapPoints(OFFERS,cardTemplate);
  });
  dataSet.catch((error) => {
    const message = document.querySelector('#error-fetch').content.cloneNode(true);
    message.querySelector('.error-text').textContent = error;
    document.body.appendChild(message);

    const btnClose = document.querySelector('.error__button-fetch');
    btnClose.addEventListener('click', () => {
      const messageArea = document.querySelector('.error-fetch');
      messageArea.classList.add('visually-hidden');
    });
  });
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData(form);
  form.reset();
  mapReset();
});

form.addEventListener('reset', () => {
  mapReset();
  const addressInputField = document.querySelector('#address');
  addressInputField.placeholder = addressInputField.value;
});
