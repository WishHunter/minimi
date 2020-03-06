
const openPopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.classList.add('popup--visible');
  }
}

const closePopup = () => {
  const popup = document.querySelector('.popup--visible');
  if (popup) {
    popup.classList.remove('popup--visible');
  }
}


export { openPopup, closePopup };
