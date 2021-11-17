const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const selectAvatarNode = document.querySelector('#avatar');
const previewAvatarNode = document.querySelector('.ad-form-header__preview img');
const selectPhotoNode = document.querySelector('#images');
const previewPhotoArea = document.querySelector('.ad-form__photo');

selectAvatarNode.addEventListener('change', () => {
  const selectFile = selectAvatarNode.files[0];
  const selectFileName = selectFile.name.toLowerCase();

  const isCheckTypes = IMAGE_FILE_TYPES.some((type) => selectFileName.endsWith(type));

  if (isCheckTypes) {
    previewAvatarNode.src = URL.createObjectURL(selectFile);
  }
});

selectPhotoNode.addEventListener('change', () => {
  const selectFile = selectPhotoNode.files[0];
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
