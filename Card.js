
export class Card {

    constructor(name, link) {
this._name = name;
this._link = link;
    }
    _getCardTemplate(){
        const elementTemplate = document.getElementById('place-template').content;
         const placeElement = elementTemplate.firstElementChild.cloneNode(true);
return placeElement;
    }

getCard(){
    this._someElement = this._getCardTemplate();
this._someElement.querySelector('.element__image').src = this._link;
this._someElement.querySelector('.element__image').alt = this._name;
this._someElement.querySelector('.element__title').textContent = this._name;
return this._someElement;
}
}
/*_getNewCard(){
    this._getCardTemplate();
   this._element.querySelector('.popup__input_text_place') = data.name; 
   this._element.querySelector('.popup__input_text_link') = data.link;
}

generateCard() {
    this._getCardTemplate();
    this._getCard();
    this._getNewCard()

}

    _setEventListeners(){
      this._element.querySelector('.element__button-like').addEventListener('click', () => {_toggleLike()}); 

      this._element.querySelector('.element__button-delete').addEventListener('click', (e) => { e.target.closest('.element').remove() });

      this._element.querySelector('.element__image').addEventListener('click', () => {
        _handleImageClick()
      } )
    } 

_toggleLike(){
    this._element.querySelector('.element__button-like').toggle('element__button-like_active');
};

_handleImageClick(){
_element.querySelector('.popup-open-photo__img').src = data.link;
_element.querySelector('.popup-open-photo__img').alt = data.name;
_element.querySelector('.popup-open-photo__title').textContent = data.name;
};
}*/