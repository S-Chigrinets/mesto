export const popupButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования "имя" и "о себе" 
export const popupButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования "имя" и "о себе" 
export const popup = document.querySelector('.popup');
export const profilePopup = document.querySelector('.popup-profile');
export const popupButtonAdd = document.querySelector('.profile__button-add');
export const popupPlaceButtonClose = document.querySelector('.popup-place__button-close');
export const popupText = document.querySelector('.popup__input_text_about-myself');
export const popupName = document.querySelector('.popup__input_text_name');
export const popupForm = document.querySelector('.popup__form');
export const popupFormPlace = document.querySelector('.popup__form-place')
export const profileText = document.querySelector('.profile__input-about-me');
export const profileName = document.querySelector('.profile__input-name');
export const popupPlace = document.querySelector('.popup-place');
export const popupSubmitPlace = document.querySelector('.popup__input_text_place');
export const popupLink = document.querySelector('.popup__input_text_link');
export const popupImgCont = document.querySelector('.popup-open-photo__container');
export const buttonCloseImg = document.querySelector('.popup-open-photo__button-close');
export const clickOnImg = document.querySelector('.element__image');
export const popupImg = document.querySelector('.popup-open-photo');
export const titleImg = document.querySelector('.element__title');
//export let openedPopup;
export const elements = document.querySelector('.elements');
export const elementTemplate = document.getElementById('place-template').content;
export const disabledButton = document.querySelector('.popup__button-save-place');

export const previewImgLink = document.querySelector('.popup-open-photo__img');
export const previewImgTitle = document.querySelector('.popup-open-photo__title');


export const validityConfig =({
    formElement: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  });