import {createOffer} from './create-offer.js';
import {getOfferMarkup} from './get-offers.js';
import {setStatusPageOn, setStatusPageOff} from './status-page.js';
import './check-form.js';

const OFFER_COUNT = 10;
const OFFERS = Array.from({length: OFFER_COUNT}, createOffer);

const mapArea = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
getOfferMarkup(mapArea,cardTemplate,OFFERS,1);
setStatusPageOff();
setStatusPageOn();
