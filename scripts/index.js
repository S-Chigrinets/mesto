const popupButtonEdit = document.querySelector('.profile__button-edit');
// кнопка открытия попапа редактирования "имя" и "о себе"
const popupButtonClose = document.querySelector('.popup__button-close');
// кнопка закрытия попапа редактирования "имя" и "о себе"
const popup = document.querySelector('.popup');

let popupText = document.querySelector('.popup_input_text');
let popupName = document.querySelector('.popup_input_name');
let popupForm = document.querySelector('.popup__form');
let profileText = document.querySelector('.profile__input-about-me');
let profileName = document.querySelector('.profile__input-name');

function openPopup()
// функция открытия попапа редактирования "имя" и "о себе"
 {
    popup.classList.add('popup_is-opened');
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}


function closePopup()
// функция закрытия попапа редактирования "имя" и "о себе"
{
    popup.classList.remove('popup_is-opened');
}

function submitForm(evt)
// функция отправки формы(в профиль) и закрытия попапа редактирования "имя" и "о себе"
{
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    closePopup();

}
popupButtonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);
