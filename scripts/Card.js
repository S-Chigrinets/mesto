import {openPopup} from './index.js';
import {popupImg, previewImgLink, previewImgTitle} from './constants.js';


export default class Card {

    constructor(data, selectorTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._selectorTemplate = selectorTemplate
    }

    _getCardTemplate() {
        const placeElement = document.querySelector(this._selectorTemplate).content.cloneNode(true);
        return placeElement;
    }




    getCard(){
        this._element = this._getCardTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }
 
    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', this._clickLike); 
        this._element.querySelector('.element__button-delete').addEventListener('click', this._deleteCard);
        this._element.querySelector('.element__image').addEventListener('click', this._openImage);
    } 

    _clickLike(evt) {
        evt.target.classList.toggle('element__button-like_active');
    }
    _deleteCard(evt) {
         evt.target.closest('.element').remove()
        }
    _openImage = () => {
        openPopup(popupImg)
        previewImgLink.src = this._link;
        previewImgLink.alt = this._name;
        previewImgTitle.textContent = this._name;
    }    

}




