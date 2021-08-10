
  

       
 
const popupButtonEdit = document.querySelector('.profile__button-edit');
// кнопка открытия попапа редактирования "имя" и "о себе"
const popupButtonClose = document.querySelector('.popup__button-close');
// кнопка закрытия попапа редактирования "имя" и "о себе"
const popup = document.querySelector('.popup');



const popupButtonAdd = document.querySelector('.profile__button-add');
const popupPlaceButtonClose = document.querySelector('.popup-place__button-close');

const popupPlace = document.querySelector('.popup-place');
function openPopupPlace()
// функция открытия попапа редактирования "Добавить место"
 {
    popupPlace.classList.add('popup-place_is-opened');
 }
    popupButtonAdd.addEventListener('click', openPopupPlace);
    function closePopupPlace()
    // функция закрытия попапа редактирования "имя" и "о себе"
    {
        popupPlace.classList.remove('popup-place_is-opened');}
        popupPlaceButtonClose.addEventListener('click', closePopupPlace);






let popupText = document.querySelector('.popup__input_text_about-myself');
let popupName = document.querySelector('.popup__input_text_name');
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




const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  const elements = document.querySelector('.elements');

  initialCards.forEach(function addCard(elem)
   {   
        const elementTemplate = document.getElementById('place-template').content; 
        const placeElement = elementTemplate.firstElementChild.cloneNode(true);
        placeElement.querySelector('.element__image').src = elem.link;
        placeElement.querySelector('.element__title').textContent = elem.name;
        placeElement.querySelector('.element__image').alt = elem.name;
        elements.append(placeElement);
});


