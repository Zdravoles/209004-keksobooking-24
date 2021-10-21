const getOfferMarkup = (aWhere, cardTemplate, OFFERS, aNumOfOffers) => {
  if (aNumOfOffers > OFFERS.length) {
    aNumOfOffers = OFFERS.length;
  }
  for (let i = 1; i <= aNumOfOffers; i++) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.popup__title').textContent = OFFERS[0].offer.title;
    card.querySelector('.popup__text--address').textContent = OFFERS[0].offer.address;
    card.querySelector('.popup__text--price').textContent = `${OFFERS[0].offer.address} ₽/ночь`;
    const getOfferType  = (aOfferType) => {
      const OFFER_TYPE = {
        flat: 'Квартира',
        bungalow: 'Бунгало',
        house: 'Дом',
        palace: 'Дворец',
        hotel: 'Отель',
      };
      for (const type in OFFER_TYPE) {
        if (aOfferType===type) {
          return OFFER_TYPE[type];
        }
      }
    };
    card.querySelector('.popup__type').textContent = getOfferType(OFFERS[0].offer.type);
    card.querySelector('.popup__text--capacity').textContent = `${OFFERS[0].offer.rooms} комнаты для ${OFFERS[0].offer.guests} гостей`;
    card.querySelector('.popup__text--time').textContent = `Заезд после ${OFFERS[0].offer.checkin}, выезд до ${OFFERS[0].offer.checkout}`;
    card.querySelector('.popup__features').textContent = OFFERS[0].offer.features;
    card.querySelector('.popup__description').textContent = OFFERS[0].offer.description;
    for (let count = 0; count < OFFERS[0].offer.photos.length; count++) {
      if (count===0) {
        card.querySelector('.popup__photo').src = OFFERS[0].offer.photos[count];
      }
      else {
        const photo = card.querySelector('.popup__photo').cloneNode(true);
        photo.src = OFFERS[0].offer.photos[count];
        card.querySelector('.popup__photos').appendChild(photo);
      }
    }
    card.querySelector('.popup__avatar').src = OFFERS[0].author.avatar;

    aWhere.appendChild(card);
  }
};
export {getOfferMarkup};
