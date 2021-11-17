const getOfferMarkup = (cardTemplate, OFFER) => {
  const cardNode = cardTemplate.cloneNode(true);
  (OFFER.offer.title!=='') ? cardNode.querySelector('.popup__title').textContent = OFFER.offer.title : cardNode.querySelector('.popup__title').remove();

  (OFFER.offer.address!=='') ? cardNode.querySelector('.popup__text--address').textContent = OFFER.offer.address : cardNode.querySelector('.popup__text--address').remove();

  (OFFER.offer.price!=='') ? cardNode.querySelector('.popup__text--price').textContent = `${OFFER.offer.price} ₽/ночь` : cardNode.querySelector('.popup__text--price').remove();

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

    cardNode.querySelector('.popup__type').textContent = getOfferType(OFFER.offer.type);
  }
  else {
    cardNode.querySelector('.popup__type').remove();
  }

  (OFFER.offer.rooms!=='' && OFFER.offer.guests!=='') ? cardNode.querySelector('.popup__text--capacity').textContent = `${OFFER.offer.rooms} комнаты для ${OFFER.offer.guests} гостей` : cardNode.querySelector('.popup__text--capacity').remove();

  (OFFER.offer.checkin!=='' && OFFER.offer.checkout!=='') ? cardNode.querySelector('.popup__text--time').textContent = `Заезд после ${OFFER.offer.checkin}, выезд до ${OFFER.offer.checkout}` : cardNode.querySelector('.popup__text--time').remove();

  if (OFFER.offer.features && OFFER.offer.features!=='') {
    const listFeatures = cardNode.querySelector('.popup__features').querySelectorAll('.popup__feature');
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
    cardNode.querySelector('.popup__features').remove();
  }

  (OFFER.offer.description!=='') ? cardNode.querySelector('.popup__description').textContent = OFFER.offer.description : cardNode.querySelector('.popup__description').remove();

  if (OFFER.offer.photos && OFFER.offer.photos!=='') {
    for (let count = 0; count < OFFER.offer.photos.length; count++) {
      if (count===0) {
        cardNode.querySelector('.popup__photo').src = OFFER.offer.photos[count];
      }
      else {
        const photo = cardNode.querySelector('.popup__photo').cloneNode(true);
        photo.src = OFFER.offer.photos[count];
        cardNode.querySelector('.popup__photos').appendChild(photo);
      }
    }
  }
  else {
    cardNode.querySelector('.popup__photos').remove();
  }

  (OFFER.author.avatar!=='') ? cardNode.querySelector('.popup__avatar').src = OFFER.author.avatar : cardNode.querySelector('.popup__avatar').remove();

  return cardNode;

};

export {getOfferMarkup};
