const getOfferMarkup = (aWhere, cardTemplate, OFFERS, aNumOfOffers) => {
  if (aNumOfOffers > OFFERS.length) {
    aNumOfOffers = OFFERS.length;
  }
  for (let index = 0; index <= aNumOfOffers-1; index++) {
    const card = cardTemplate.cloneNode(true);
    (OFFERS[index].offer.title!=='') ? card.querySelector('.popup__title').textContent = OFFERS[index].offer.title : card.querySelector('.popup__title').remove();

    (OFFERS[index].offer.address!=='') ? card.querySelector('.popup__text--address').textContent = OFFERS[index].offer.address : card.querySelector('.popup__text--address').remove();

    (OFFERS[index].offer.price!=='') ? card.querySelector('.popup__text--price').textContent = `${OFFERS[index].offer.price} ₽/ночь` : card.querySelector('.popup__text--price').remove();

    if (OFFERS[index].offer.type!=='') {
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

      card.querySelector('.popup__type').textContent = getOfferType(OFFERS[index].offer.type);
    }
    else {
      card.querySelector('.popup__type').remove();
    }

    (OFFERS[index].offer.rooms!=='' && OFFERS[index].offer.guests!=='') ? card.querySelector('.popup__text--capacity').textContent = `${OFFERS[index].offer.rooms} комнаты для ${OFFERS[index].offer.guests} гостей` : card.querySelector('.popup__text--capacity').remove();

    (OFFERS[index].offer.checkin!=='' && OFFERS[index].offer.checkout!=='') ? card.querySelector('.popup__text--time').textContent = `Заезд после ${OFFERS[index].offer.checkin}, выезд до ${OFFERS[index].offer.checkout}` : card.querySelector('.popup__text--time').remove();

    if (OFFERS[index].offer.features!=='') {
      const listFeatures = card.querySelector('.popup__features').querySelectorAll('.popup__feature');
      listFeatures.forEach((featureElement) => {
        const isIdentity = OFFERS[index].offer.features.some(
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

    (OFFERS[index].offer.description!=='') ? card.querySelector('.popup__description').textContent = OFFERS[index].offer.description : card.querySelector('.popup__description').remove();

    if (OFFERS[index].offer.photos!=='') {
      for (let count = 0; count < OFFERS[index].offer.photos.length; count++) {
        if (count===0) {
          card.querySelector('.popup__photo').src = OFFERS[index].offer.photos[count];
        }
        else {
          const photo = card.querySelector('.popup__photo').cloneNode(true);
          photo.src = OFFERS[index].offer.photos[count];
          card.querySelector('.popup__photos').appendChild(photo);
        }
      }
    }
    else {
      card.querySelector('.popup__photos').remove();
    }

    (OFFERS[index].author.avatar!=='') ? card.querySelector('.popup__avatar').src = OFFERS[index].author.avatar : card.querySelector('.popup__avatar').remove();

    aWhere.appendChild(card);
  }
};
export {getOfferMarkup};
