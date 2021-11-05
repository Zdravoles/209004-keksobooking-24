const getOfferMarkup = (cardTemplate, OFFER) => {
  const card = cardTemplate.cloneNode(true);
  (OFFER.offer.title!=='') ? card.querySelector('.popup__title').textContent = OFFER.offer.title : card.querySelector('.popup__title').remove();

  (OFFER.offer.address!=='') ? card.querySelector('.popup__text--address').textContent = OFFER.offer.address : card.querySelector('.popup__text--address').remove();

  (OFFER.offer.price!=='') ? card.querySelector('.popup__text--price').textContent = `${OFFER.offer.price} ₽/ночь` : card.querySelector('.popup__text--price').remove();

  if (OFFER.offer.type!=='') {
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

    card.querySelector('.popup__type').textContent = getOfferType(OFFER.offer.type);
  }
  else {
    card.querySelector('.popup__type').remove();
  }

  (OFFER.offer.rooms!=='' && OFFER.offer.guests!=='') ? card.querySelector('.popup__text--capacity').textContent = `${OFFER.offer.rooms} комнаты для ${OFFER.offer.guests} гостей` : card.querySelector('.popup__text--capacity').remove();

  (OFFER.offer.checkin!=='' && OFFER.offer.checkout!=='') ? card.querySelector('.popup__text--time').textContent = `Заезд после ${OFFER.offer.checkin}, выезд до ${OFFER.offer.checkout}` : card.querySelector('.popup__text--time').remove();

  if (OFFER.offer.features!=='') {
    const listFeatures = card.querySelector('.popup__features').querySelectorAll('.popup__feature');
    listFeatures.forEach((featureElement) => {
      const isIdentity = OFFER.offer.features.some(
        (featureValue) => featureElement.classList.contains(`popup__feature--${featureValue}`),
      );
      if (!isIdentity) {
        featureElement.remove();
      }
    });
  }
  else {
    card.querySelector('.popup__features').remove();
  }

  (OFFER.offer.description!=='') ? card.querySelector('.popup__description').textContent = OFFER.offer.description : card.querySelector('.popup__description').remove();

  if (OFFER.offer.photos!=='') {
    for (let count = 0; count < OFFER.offer.photos.length; count++) {
      if (count===0) {
        card.querySelector('.popup__photo').src = OFFER.offer.photos[count];
      }
      else {
        const photo = card.querySelector('.popup__photo').cloneNode(true);
        photo.src = OFFER.offer.photos[count];
        card.querySelector('.popup__photos').appendChild(photo);
      }
    }
  }
  else {
    card.querySelector('.popup__photos').remove();
  }

  (OFFER.author.avatar!=='') ? card.querySelector('.popup__avatar').src = OFFER.author.avatar : card.querySelector('.popup__avatar').remove();

  return card;

};

export {getOfferMarkup};
