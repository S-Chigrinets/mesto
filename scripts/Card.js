
export default class Card {
    constructor(data, handleClickImage, selectorTemplate,) {
        this._name = data.name;
        this._link = data.link;
        this._handleClickImage = handleClickImage;
        this._selectorTemplate = selectorTemplate;
        }

   _getCardTemplate(){
    const placeTemplate = document.querySelector(this._selectorTemplate).content;
    const placeDomElement = placeTemplate.querySelector('.element');
    const placeElement = placeDomElement.cloneNode(true);
    this._element = placeElement;
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
        this._element.querySelector('.element__button-delete').addEventListener('click',() => this._deleteCard());
        this._element.querySelector('.element__image').addEventListener('click', () => this._handleClickImage(this._name, this._link))
    } 
    
    _clickLike(evt) {
        evt.target.classList.toggle('element__button-like_active');
    }
    
    _deleteCard() { 
        this._element.remove();
        this._element = null;
   }

}




