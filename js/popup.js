const HIDE_CLASS = 'visually-hidden';

const createPopupElements = () => {
  if (!document.querySelector('.success')) {
    const templateAccessNode = document.querySelector('#success').content.cloneNode(true);
    document.body.appendChild(templateAccessNode);
  }

  if (!document.querySelector('.error')) {
    const templateErrorNode = document.querySelector('#error').content.cloneNode(true);
    document.body.appendChild(templateErrorNode);
  }

  const messageSuccessNode = document.querySelector('.success');
  const messageErrorNode = document.querySelector('.error');

  return {success: messageSuccessNode, error: messageErrorNode};
};

const popups = createPopupElements();

const getOpenPopup = () => {
  for (const element in popups) {
    if (!popups[element].classList.contains(HIDE_CLASS)) {
      return popups[element];
    }
  }
  return false;
};

function hidePopup() {
  if (getOpenPopup()) {
    const messageArea = getOpenPopup();
    messageArea.classList.add(HIDE_CLASS);
  }
}

function onPopupEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidePopup();
  }
}

const showPopup = (messageType, messageContent) => {
  const messageArea = popups[messageType];
  messageArea.classList.remove(HIDE_CLASS);
  if (messageArea === 'error') {
    messageArea.querySelector('.error__message').textContent = messageContent;
    const btnCloseNode = document.querySelector('.error__button');
    btnCloseNode.addEventListener('click', () => {
      messageArea.classList.add('visually-hidden');
    });
  }
  document.addEventListener('keydown', onPopupEscKeydown, {once: true});
  messageArea.addEventListener('click', hidePopup);
};

export {showPopup, hidePopup};
