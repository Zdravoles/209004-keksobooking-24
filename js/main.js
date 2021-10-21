import {createOffer} from './create-offer.js';
import {getOfferMarkup} from './get-offers.js';

const OFFER_COUNT = 10;
const OFFERS = Array.from({length: OFFER_COUNT}, createOffer);

const mapArea = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
getOfferMarkup(mapArea,cardTemplate,OFFERS,1);
