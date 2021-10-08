//показать ошибку.скрыть ошибку.
//проверить поле. валидное поле. невалидное поле.
//отключенная кнопка.включенная кнопка. переключение состояния кнопки.
//сет слушателей. включение валидации

export default class FormValidator{
    constructor(validityConfig, formElement) {
        this._inputSelector = validityConfig.inputSelector
        this._submitButtonSelector = validityConfig.submitButtonSelector
        this._inputErrorClass = validityConfig.inputErrorClass 
        this._errorClass = validityConfig.errorClass
        this._inactiveButtonClass = validityConfig.inactiveButtonClass
        this._formElement = formElement
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))  
    }
    
    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
    
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput = () => {
        return this._inputList.some(inputElement => {
            return !inputElement.validity.valid;
        })
    };

    _hasNotInputValues = () => {
        return this._inputList.every(inputElement => {
            return inputElement.value.lenght === 0;
        });
    };

    _disableSubmitButton = (buttonElement) => {
        buttonElement.classList.add(this._inactiveButtonClass);

    }
    
    _enableSubmitButton = (buttonElement) => {
        buttonElement.classList.remove(this._inactiveButtonClass);
    };

    _toggleButtonState = (inputList, inactiveButtonClass)   => {
        
        if (this._hasInvalidInput(inputList) || this._hasNotInputValues(inputList)) {
            this._disableSubmitButton(this._buttonElement);
        } else {
            this._enableSubmitButton(this._buttonElement);
        }
    };

    _setEventListeners = () => {
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._inputList.forEach((inputElement) => {

                inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }

    enableValidation() {
        this._setEventListeners()
    };

}