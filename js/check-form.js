const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
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
const typeHousing = document.querySelector('#type');
const priceNight = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const checkCapacity = () => {
  for (const option of capacity.options) {
    option.disabled = true;
  }

  const selectedValue = roomNumber.options[roomNumber.selectedIndex].text;

  CHECK_CAPACITY_ROOMS.forEach((typeCapacity,index) => {
    const selectedCapacity = CHECK_CAPACITY_ROOMS[index][1].split('; ');
    if (selectedValue === typeCapacity[0]) {
      for (const option of capacity.options) {
        if (selectedCapacity.includes(option.text, 0)) {
          option.disabled = false;
        }
      }
    }
  });

  (roomNumber.value === CHECK_NOROOMS_VALUE) ? capacity.value = '0' : capacity.value = roomNumber.value;

};

const checkPriceNight = (aHousingType) => {
  for (const type in CHECK_HOUSING_PRICE) {
    if (aHousingType===type) {
      priceNight.placeholder = CHECK_HOUSING_PRICE[type];
      priceNight.min = CHECK_HOUSING_PRICE[type];
    }
  }
};

const timeSync = (aTimeSelect) => {
  (aTimeSelect==='timein') ? timeout.selectedIndex = timein.selectedIndex : timein.selectedIndex = timeout.selectedIndex;
};

roomNumber.addEventListener('change',() => {
  checkCapacity();
});

typeHousing.addEventListener('change',() => {
  checkPriceNight(typeHousing.value);
});

timein.addEventListener('change',() => {
  timeSync('timein');
});

timeout.addEventListener('change',() => {
  timeSync('timeout');
});

checkCapacity();
checkPriceNight(typeHousing.value);
