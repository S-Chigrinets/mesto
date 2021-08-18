const popupButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования "имя" и "о себе"
const popupButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования "имя" и "о себе"
const popup = document.querySelector('.popup');
const popupButtonAdd = document.querySelector('.profile__button-add');
const popupPlaceButtonClose = document.querySelector('.popup-place__button-close');
let popupText = document.querySelector('.popup__input_text_about-myself');
let popupName = document.querySelector('.popup__input_text_name');
let popupForm = document.querySelector('.popup__form');
let popupFormPlace = document.querySelector('.popup__form-place')
let profileText = document.querySelector('.profile__input-about-me');
let profileName = document.querySelector('.profile__input-name');
const popupPlace = document.querySelector('.popup-place');
const popupSubmitPlace = document.querySelector('.popup__input_text_place');
const popupLink = document.querySelector('.popup__input_text_link');

const popupImgCont = document.querySelector('.popup-open-photo__container');
const buttonCloseImg = document.querySelector('.popup-open-photo__button-close');
const clickOnImg = document.querySelector('.element__image');
const openImg = document.querySelector('.popup-open-photo');
const titleImg = document.querySelector('.element__title');

function openPopup(popup) //функция открытия попапа
{
    popup.classList.add('popup_is-opened');
}

function closePopup(popup) // функция закрытия попапа
{
    popup.classList.remove('popup_is-opened');
}

function openPopupPrefiling() // функция предварительного заполнения попапа редактирования "имя" и "о себе"
{
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}

function submitForm(evt) // функция отправки формы(в профиль) и закрытия попапа редактирования "имя" и "о себе"
{
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    closePopup(popup);
    popupForm.reset();
}
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
const elementTemplate = document.getElementById('place-template').content;
const placeElement = elementTemplate.firstElementChild.cloneNode(true);

function createCard(data) {
    const elementTemplate = document.getElementById('place-template').content;
    const placeElement = elementTemplate.firstElementChild.cloneNode(true);
    const placeElementImage = placeElement.querySelector('.element__image');
    const placeElementTitle = placeElement.querySelector('.element__title');

    placeElementImage.src = data.link;
    placeElementTitle.textContent = data.name;

    placeElement.querySelector('.element__button-delete').addEventListener('click', (e) => { e.target.closest('.element').remove() });
    elements.prepend(placeElement);
    closePopup(popupPlace);

    placeElement.querySelector('.element__button-like').addEventListener('click', (likeActive) => { placeElement.querySelector('.element__button-like').classList.toggle('element__button-like_active') });

    const popupImgCont = document.querySelector('.popup-open-photo__container');
    const buttonCloseImg = document.querySelector('.popup-open-photo__button-close');
    const clickOnImg = document.querySelector('.element__image');
    const openImg = document.querySelector('.popup-open-photo');
    const titleImg = document.querySelector('.element__title');

    function openPopupImg() // функция открытия попапа "Открыть картинку"
    {
        openImg.classList.add('popup-open-photo_is-opened');
        popupImgCont.querySelector('.popup-open-photo__img').src = clickOnImg.src;
        popupImgCont.querySelector('.popup-open-photo__img').alt = clickOnImg.alt;
        popupImgCont.querySelector('.popup-open-photo__title').alt = titleImg;
    } 
    clickOnImg.addEventListener('click', openPopupImg)
    return placeElement;
}

const newCard = (evt) => {//Функция добавления новой карточки
    evt.preventDefault();
    const cardElem = createCard({
        name: popupSubmitPlace.value,
        link: popupLink.value,
    });
    elements.prepend(cardElem);
    closePopup(popupPlace);
    popupForm.reset();
}

initialCards.forEach((data) => {
    const cardItem = createCard(data);
    elements.append(cardItem);
})

function closePopupImg() // функция закрытия попапа "Открыть картинку"
    {
        openImg.classList.remove('popup-open-photo_is-opened');
    }
buttonCloseImg.addEventListener('click', closePopupImg)
popupForm.addEventListener('submit', submitForm);
popupPlace.addEventListener('submit', newCard);
popupButtonEdit.addEventListener('click', () => openPopup(popup))
popupButtonAdd.addEventListener('click', () => openPopup(popupPlace), openPopupPrefiling())
popupButtonClose.addEventListener('click', () => closePopup(popup))
popupPlaceButtonClose.addEventListener('click', () => closePopup(popupPlace))
