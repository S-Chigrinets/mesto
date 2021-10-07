import {initialCards} from './initial-cards.js'
import Card from './Card.js';
import {popupButtonEdit, popupButtonClose,  popup, profilePopup, popupButtonAdd, popupPlaceButtonClose, popupText, popupName, popupForm, popupFormPlace, profileText, profileName, popupPlace, popupSubmitPlace, popupLink, buttonCloseImg, popupImg, disabledButton, elements
} from './constants.js';

/*const popupButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования "имя" и "о себе" 
const popupButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования "имя" и "о себе" 
const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup-profile');
const popupButtonAdd = document.querySelector('.profile__button-add');
const popupPlaceButtonClose = document.querySelector('.popup-place__button-close');
const popupText = document.querySelector('.popup__input_text_about-myself');
const popupName = document.querySelector('.popup__input_text_name');
const popupForm = document.querySelector('.popup__form');
const popupFormPlace = document.querySelector('.popup__form-place')
const profileText = document.querySelector('.profile__input-about-me');
const profileName = document.querySelector('.profile__input-name');
const popupPlace = document.querySelector('.popup-place');
const popupSubmitPlace = document.querySelector('.popup__input_text_place');
const popupLink = document.querySelector('.popup__input_text_link');
const popupImgCont = document.querySelector('.popup-open-photo__container');
const buttonCloseImg = document.querySelector('.popup-open-photo__button-close');
const clickOnImg = document.querySelector('.element__image');
const popupImg = document.querySelector('.popup-open-photo');
const titleImg = document.querySelector('.element__title');
const elements = document.querySelector('.elements');*/
let openedPopup;

export function openPopup(popup) //функция открытия попапа 
{
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydownkEsc);
    openedPopup = popup;
    popup.addEventListener('click', closeOverlay);
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
    openPopup(popup);
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}
function submitForm(evt) // функция отправки формы(в профиль) и закрытия попапа редактирования "имя" и "о себе" 
{
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    closePopup(popup);
}

const inactiveButton = (disabledButton) => {
    disabledButton.classList.add('popup__button-save_inactive')
};



function createCard(card) {
    const newCard = new Card (card, '#place-template');//Создаём класс дял каждой карточки,передаём темплейт,
    return newCard.getCard();
  }

const createNewCard = (evt) => {
    evt.preventDefault();

    const newCard  = {
        name: popupSubmitPlace.value,
        link: popupLink.value,
    };
    createCard(newCard);
    elements.prepend(createCard(newCard)); // пихаем карточку в конец блока
    
     popupFormPlace.reset();
    inactiveButton(disabledButton)
    closePopup(popupPlace);
}

initialCards.forEach((card) => {
    elements.prepend(createCard(card)); // пихаем карточку в конец блока
  })

function closePopupImg() // функция закрытия попапа "Открыть картинку" 
{
    closePopup(popupImg);
}

buttonCloseImg.addEventListener('click', closePopupImg)
popupForm.addEventListener('submit', submitForm);
popupPlace.addEventListener('submit', createNewCard);
popupButtonEdit.addEventListener('click', () => openPopupPrefiling())
popupButtonAdd.addEventListener('click', () => openPopup(popupPlace),)
popupButtonClose.addEventListener('click', () => closePopup(popup))
popupPlaceButtonClose.addEventListener('click', () => closePopup(popupPlace))





