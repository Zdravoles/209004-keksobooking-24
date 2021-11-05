import {createOffer} from './create-offer.js';
import {setStatusPageOn, setStatusPageOff} from './status-page.js';
import './check-form.js';
import {map, getMapInitCoords, setMapPoints} from './map.js';

const OFFER_COUNT = 10;
const OFFERS = Array.from({length: OFFER_COUNT}, createOffer);

const cardTemplate = document.querySelector('#card').content;

setStatusPageOff();
if (map.on('load')) {
  setStatusPageOn();
  getMapInitCoords();
  setMapPoints(OFFERS,cardTemplate);
}
