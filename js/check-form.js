const roomNumberNode = document.querySelector('#room_number');
const capacityNode = document.querySelector('#capacity');
const CHECK_CAPACITY_ROOMS = [
  ['1 комната','для 1 гостя'],
  ['2 комнаты','для 1 гостя; для 2 гостей'],
  ['3 комнаты','для 1 гостя; для 2 гостей; для 3 гостей'],
  ['100 комнат','не для гостей'],
];
const CHECK_HOUSING_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const CHECK_NOROOMS_VALUE = '100';
const typeHousingNode = document.querySelector('#type');
const priceNightNode = document.querySelector('#price');
const timeinNode = document.querySelector('#timein');
const timeoutNode = document.querySelector('#timeout');

const checkCapacity = () => {
  for (const option of capacityNode.options) {
    option.disabled = true;
  }

  const selectedValue = roomNumberNode.options[roomNumberNode.selectedIndex].text;

  CHECK_CAPACITY_ROOMS.forEach((typeCapacity,index) => {
    const selectedCapacity = CHECK_CAPACITY_ROOMS[index][1].split('; ');
    if (selectedValue === typeCapacity[0]) {
      for (const option of capacityNode.options) {
        if (selectedCapacity.includes(option.text, 0)) {
          option.disabled = false;
        }
      }
    }
  });

  (roomNumberNode.value === CHECK_NOROOMS_VALUE) ? capacityNode.value = '0' : capacityNode.value = roomNumberNode.value;

};

const checkPriceNight = (aHousingType) => {
  for (const type in CHECK_HOUSING_PRICE) {
    if (aHousingType===type) {
      priceNightNode.placeholder = CHECK_HOUSING_PRICE[type];
      priceNightNode.min = CHECK_HOUSING_PRICE[type];
    }
  }
};

const timeSync = (aTimeSelect) => {
  (aTimeSelect==='timein') ? timeoutNode.selectedIndex = timeinNode.selectedIndex : timeinNode.selectedIndex = timeoutNode.selectedIndex;
};

roomNumberNode.addEventListener('change',() => {
  checkCapacity();
});

typeHousingNode.addEventListener('change',() => {
  checkPriceNight(typeHousingNode.value);
});

timeinNode.addEventListener('change',() => {
  timeSync('timein');
});

timeoutNode.addEventListener('change',() => {
  timeSync('timeout');
});

checkCapacity();
checkPriceNight(typeHousingNode.value);
