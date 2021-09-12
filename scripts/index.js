const popupButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования "имя" и "о себе" 
const popupButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования "имя" и "о себе" 
const popup = document.querySelector('.popup');
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

let popupIsOpened;

function openPopup(popup) //функция открытия попапа 
{
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydownkEsc);
    popupIsOpened = popup;
    popup.addEventListener('click', closeOverlay)
}

function closePopup(popup) // функция закрытия попапа 
{
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupKeydownkEsc);
}

const closePopupKeydownkEsc = (evt) => { //Функция закрытия попапа по "Esc" 
    const popup = popupIsOpened;
    if (evt.key === 'Escape') {
        closePopup(popup);
    };
};


const closeOverlay = (evt) => { //Функция закрытия по клику вне попапа
    if (evt.target.classList.contains('popup')) {
        const popups = document.querySelector('.popup_is-opened');
        closePopup(popups);
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

const elements = document.querySelector('.elements');
const elementTemplate = document.getElementById('place-template').content;

function createCard(data) { 
    const placeElement = elementTemplate.firstElementChild.cloneNode(true);
    const placeElementImage = placeElement.querySelector('.element__image');
    const placeElementTitle = placeElement.querySelector('.element__title');

    placeElementImage.src = data.link;
    placeElementImage.alt = data.name;
    placeElementTitle.textContent = data.name;

    placeElement.querySelector('.element__button-delete').addEventListener('click', (e) => { e.target.closest('.element').remove() });

    const likeButton = placeElement.querySelector('.element__button-like');
    likeButton.addEventListener('click', () => { likeButton.classList.toggle('element__button-like_active') });

    function openPopupImg() // функция открытия попапа "Открыть картинку" 
    {
        openPopup(popupImg)
        popupImgCont.querySelector('.popup-open-photo__img').src = data.link;
        popupImgCont.querySelector('.popup-open-photo__img').alt = data.name;
        popupImgCont.querySelector('.popup-open-photo__title').textContent = data.name;
    }
    placeElementImage.addEventListener('click', openPopupImg)
    return placeElement;
}

const createNewCard = (evt) => {//Функция добавления новой карточки 
    evt.preventDefault();
    const cardElem = createCard({
        name: popupSubmitPlace.value,
        link: popupLink.value,
    });
    elements.prepend(cardElem);
    popupFormPlace.reset();
    closePopup(popupPlace);
}

initialCards.forEach((data) => {
    const cardItem = createCard(data);
    elements.append(cardItem);
})

function closePopupImg() // функция закрытия попапа "Открыть картинку" 
{
    closePopup(popupImg);
}




buttonCloseImg.addEventListener('click', closePopupImg)
popupForm.addEventListener('submit', submitForm);
popupPlace.addEventListener('submit', createNewCard);
popupButtonEdit.addEventListener('click', () => openPopupPrefiling())
popupButtonAdd.addEventListener('click', () => openPopup(popupPlace))
popupButtonClose.addEventListener('click', () => closePopup(popup))
popupPlaceButtonClose.addEventListener('click', () => closePopup(popupPlace))
popup.addEventListener('click', closePopup)



