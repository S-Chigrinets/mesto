const popupButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const popupButtonSave = document.querySelector('.popup__button-save');

const buttonAdd = document.querySelector('.profile__button-add');
const buttonLike = document.querySelector('.element__button-like');

const popup = document.querySelector('.popup');

let popupText = document.querySelector('.popup__input-text');
let popupName = document.querySelector('.popup__input-name');
let popupForm = document.querySelector('.popup__form');
let profileText = document.querySelector('.profile__input-about-me');
let profileName = document.querySelector('.profile__input-name');


function popupOpen () {
    popup.classList.add('popup_is-opened');
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}
popupButtonEdit.addEventListener('click', popupOpen);

function popupClose () {
    popup.classList.remove('popup_is-opened');
}

popupButtonClose.addEventListener('click', popupClose);


function submitForm (evt) {
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    popupClose();
      

}
    popupForm.addEventListener('submit', submitForm)
   





    





console.log(popupButtonEdit, popupButtonClose, popupButtonSave, buttonAdd, buttonLike);





   
