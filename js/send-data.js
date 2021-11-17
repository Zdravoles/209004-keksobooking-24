import {showPopup} from './popup.js';

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
          form.reset();
          return showPopup('success');
        }
        throw new Error(`${response.status} ${response.statusText}`);
      },
    )
    .catch(
      (err) => {showPopup('error',err);},
    );
};

export {sendFormData};
