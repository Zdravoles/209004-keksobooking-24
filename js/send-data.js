const messageError = (err) => {
  if (!document.querySelector('.error')) {
    const message = document.querySelector('#error').content.cloneNode(true);
    message.querySelector('.error__message').textContent = err;
    document.body.appendChild(message);
  }

  const messageArea = document.querySelector('.error');
  messageArea.classList.remove('visually-hidden');
  const btnClose = document.querySelector('.error__button');
  btnClose.addEventListener('click', () => {
    messageArea.classList.add('visually-hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      messageArea.classList.add('visually-hidden');
    }
  });

  messageArea.addEventListener('click', () => {
    messageArea.classList.add('visually-hidden');
  });
};

const messageSuccess = () => {
  if (!document.querySelector('.success')) {
    const message = document.querySelector('#success').content.cloneNode(true);
    document.body.appendChild(message);
  }

  const messageArea = document.querySelector('.success');
  messageArea.classList.remove('visually-hidden');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      messageArea.classList.add('visually-hidden');
    }
  });

  messageArea.addEventListener('click', () => {
    messageArea.classList.add('visually-hidden');
  });
};

const sendFormData = (form) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(form),
    },
  )

    .then(
      (response) => {
        if (response.ok) {
          return messageSuccess();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      },
    )
    .catch(
      (err) => {messageError(err);},
    );
};

export {sendFormData};
