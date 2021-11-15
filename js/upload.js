const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const selectAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const selectPhoto = document.querySelector('#images');
const previewPhotoArea = document.querySelector('.ad-form__photo');

selectAvatar.addEventListener('change', () => {
  const selectFile = selectAvatar.files[0];
  const selectFileName = selectFile.name.toLowerCase();

  const isCheckTypes = IMAGE_FILE_TYPES.some((type) => selectFileName.endsWith(type));

  if (isCheckTypes) {
    previewAvatar.src = URL.createObjectURL(selectFile);
  }
});

selectPhoto.addEventListener('change', () => {
  const selectFile = selectPhoto.files[0];
  const selectFileName = selectFile.name.toLowerCase();

  const isCheckTypes = IMAGE_FILE_TYPES.some((type) => selectFileName.endsWith(type));

  if (isCheckTypes) {
    if (!document.querySelector('.ad-form__photo img')) {
      const previewPhoto = document.createElement('img');
      previewPhoto.src = URL.createObjectURL(selectFile);
      previewPhotoArea.appendChild(previewPhoto);
    }
    else {
      document.querySelector('.ad-form__photo img').src = URL.createObjectURL(selectFile);
    }
  }
});
