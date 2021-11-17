const setStatusPageOff = () => {
  const formAdNode = document.querySelector('.ad-form');
  formAdNode.classList.add('ad-form--disabled');

  const fieldsets = formAdNode.querySelectorAll('fieldset');
  for (const element of fieldsets) {
    element.disabled = true;
  }

  const formFiltersNode = document.querySelector('.map__filters');
  formFiltersNode.classList.add('map__filters--disabled');

  const filterElements = formFiltersNode.children;
  for (const element of filterElements) {
    element.disabled = true;
  }
};

const setStatusPageOn = () => {
  const formAdNode = document.querySelector('.ad-form');
  formAdNode.classList.remove('ad-form--disabled');

  const fieldsets = formAdNode.querySelectorAll('fieldset');
  for (const element of fieldsets) {
    element.disabled = false;
  }
  document.querySelector('#address').readOnly = true;

  const formFiltersNode = document.querySelector('.map__filters');
  formFiltersNode.classList.remove('map__filters--disabled');

  const filterElements = formFiltersNode.children;
  for (const element of filterElements) {
    element.disabled = false;
  }
};

export {setStatusPageOn, setStatusPageOff};
