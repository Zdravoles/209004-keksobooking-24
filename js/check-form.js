const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const CHECK_CAPACITY_ROOMS = [
  ['1 комната','для 1 гостя'],
  ['2 комнаты','для 1 гостя; для 2 гостей'],
  ['3 комнаты','для 1 гостя; для 2 гостей; для 3 гостей'],
  ['100 комнат','не для гостей'],
];

const checkAdForm = () => {
  const fieldTitle = document.querySelector('#title');
  if (fieldTitle.value.length>100) {
    fieldTitle.setCustomValidity('Максимальный размер 100 символов. Сократите, пожалуйста, название.');
    fieldTitle.reportValidity();
    return false;
  }

  return true;
};

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

  (roomNumber.value === '100') ? capacity.value = '0' : capacity.value = roomNumber.value;

};

roomNumber.addEventListener('change',() => {
  checkCapacity();
});

checkCapacity();

export {checkAdForm};
