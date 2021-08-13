const popupButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования "имя" и "о себе"
const popupButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования "имя" и "о себе"
const popup = document.querySelector('.popup');
const popupButtonAdd = document.querySelector('.profile__button-add');
const popupPlaceButtonClose = document.querySelector('.popup-place__button-close');
let popupText = document.querySelector('.popup__input_text_about-myself');
let popupName = document.querySelector('.popup__input_text_name');
let popupForm = document.querySelector('.popup__form');
let profileText = document.querySelector('.profile__input-about-me');
let profileName = document.querySelector('.profile__input-name');

function openPopup() // функция открытия попапа редактирования "имя" и "о себе"
{
    popup.classList.add('popup_is-opened');
    popupText.value = profileText.textContent;
    popupName.value = profileName.textContent;
}

function closePopup() // функция закрытия попапа редактирования "имя" и "о себе"
{
    popup.classList.remove('popup_is-opened');
}

function submitForm(evt) // функция отправки формы(в профиль) и закрытия попапа редактирования "имя" и "о себе"
{
    evt.preventDefault();
    profileText.textContent = popupText.value;
    profileName.textContent = popupName.value;
    closePopup();
}

const popupPlace = document.querySelector('.popup-place');
function openPopupPlace() // функция открытия попапа редактирования "Добавить место"
{
    popupPlace.classList.add('popup-place_is-opened');
}

function closePopupPlace() // функция закрытия попапа редактирования "Добавить место"
{
    popupPlace.classList.remove('popup-place_is-opened');
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

function newCard(evt) {
    evt.preventDefault();
    const popupSubmitPlace = document.querySelector('.popup__input_text_place');
    const popupLink = document.querySelector('.popup__input_text_link');
    const elementTemplate = document.getElementById('place-template').content;
    const placeElement = elementTemplate.firstElementChild.cloneNode(true);
    placeElement.querySelector('.element__image').src = popupLink.value;
    placeElement.querySelector('.element__title').textContent = popupSubmitPlace.value;
    placeElement.querySelector('.element__image').alt = popupSubmitPlace.value;
    placeElement.querySelector('.element__button-delete').addEventListener('click', (e) => { e.target.closest('.element').remove() });
    elements.prepend(placeElement);
    closePopupPlace();

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
    function closePopupImg() // функция закрытия попапа "Открыть картинку"
    {
        openImg.classList.remove('popup-open-photo_is-opened');
    }
    buttonCloseImg.addEventListener('click', closePopupImg)
    clickOnImg.addEventListener('click', openPopupImg)
}

initialCards.forEach(function addCard(elem) {
    const elementTemplate = document.getElementById('place-template').content;
    const placeElement = elementTemplate.firstElementChild.cloneNode(true);
    placeElement.querySelector('.element__image').src = elem.link;
    placeElement.querySelector('.element__title').textContent = elem.name;
    placeElement.querySelector('.element__image').alt = elem.name;
    elements.prepend(placeElement);

    placeElement.querySelector('.element__button-delete').addEventListener('click', (e) => { e.target.closest('.element').remove() })

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
        popupImgCont.querySelector('.popup-open-photo__title').textContent = clickOnImg.alt;
    }
    function closePopupImg() // функция закрытия попапа "Открыть картинку"
    {
        openImg.classList.remove('popup-open-photo_is-opened');
    }
    buttonCloseImg.addEventListener('click', closePopupImg)
    clickOnImg.addEventListener('click', openPopupImg)
});

popupButtonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);
popupButtonAdd.addEventListener('click', openPopupPlace);
popupPlace.addEventListener('submit', newCard);
popupPlaceButtonClose.addEventListener('click', closePopupPlace);