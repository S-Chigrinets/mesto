import {initialCards} from './initial-cards.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import {popupButtonEdit, popupButtonClose, profilePopup, popupButtonAdd, popupPlaceButtonClose, popupText, popupName, popupForm, popupFormPlace, profileText, profileName, popupPlace, popupSubmitPlace, popupLink, buttonCloseImg, popupImg, disabledButton, elements, validityConfig, previewImgLink, previewImgTitle
} from './constants.js';

let openedPopup;

export function openPopup(popup) //функция открытия попапа 
{
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydownkEsc);
    openedPopup = popup;
    popup.addEventListener('mousedown', closeOverlay);
}

function closePopup(popup) // функция закрытия попапа 
{
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupKeydownkEsc);
    popup.removeEventListener('click', closeOverlay);
}
const closePopupKeydownkEsc = (evt) => { //Функция закрытия попапа по "Esc" 
    const popup = openedPopup;
    if (evt.key === 'Escape') {
        closePopup(popup);
    };
};
const closeOverlay = (evt) => { //Функция закрытия по клику вне попапа
    if (evt.target.classList.contains('popup')) {

        const popup = openedPopup;
        closePopup(popup);
    }
}
function openPopupPrefiling() // функция предварительного заполнения попапа редактирования "имя" и "о себе" 
{
    openPopup(profilePopup);
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}
function submitForm(evt) // функция отправки формы(в профиль) и закрытия попапа редактирования "имя" и "о себе" 
{
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    closePopup(profilePopup);
}

function handleClickImage(name, link) {
    openPopup(popupImg)
    previewImgLink.src = link;
    previewImgLink.alt = name;
    previewImgTitle.textContent = name;
  }
  
const inactiveButton = (disabledButton) => {
    disabledButton.classList.add('popup__button-save_inactive')
    disabledButton.setAttribute('disabled', true);
};
//создание карточек
function createCard(card) {
    const newCard = new Card (card, handleClickImage, '#place-template');
    return newCard.getCard();
  }

const createNewCard = (evt) => {
    evt.preventDefault();
    const newCard  = {
        name: popupSubmitPlace.value,
        link: popupLink.value,
    };
    createCard(newCard);
    elements.prepend(createCard(newCard)); 
     popupFormPlace.reset();
    inactiveButton(disabledButton)
    closePopup(popupPlace);
}

initialCards.forEach((card) => {
    elements.prepend(createCard(card));
  })
//валидация
  const profileValidate = new FormValidator(validityConfig, popupForm );
  profileValidate.enableValidation();
  const cardFormElement = new FormValidator(validityConfig, popupPlace);
  cardFormElement.enableValidation();




function closePopupImg() // функция закрытия попапа "Открыть картинку" 
{
    closePopup(popupImg);
}
//слушатели
buttonCloseImg.addEventListener('click', closePopupImg)
popupForm.addEventListener('submit', submitForm);
popupPlace.addEventListener('submit', createNewCard);
popupButtonEdit.addEventListener('click', () => openPopupPrefiling())
popupButtonAdd.addEventListener('click', () => openPopup(popupPlace),)
popupButtonClose.addEventListener('click', () => closePopup(profilePopup))
popupPlaceButtonClose.addEventListener('click', () => closePopup(popupPlace))







