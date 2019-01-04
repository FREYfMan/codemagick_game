'use strict';
/* jshint browser: true */

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
    
var peoples = [
    {
        firstName: "Иван",
        lastName: "да Марья",
        coatColor: "rgb(101, 137, 164)",
        eyesColor: "black"
    },
    {
        firstName: "Хуан Себастьян",
        lastName: "Верон",
        coatColor: "rgb(241, 43, 107)",
        eyesColor: "red"
    },
    {
        firstName: "Мария",
        lastName: "Мирабелла",
        coatColor: "rgb(146, 100, 161)",
        eyesColor: "blue"
    },
    {
        firstName: "Кристоф",
        lastName: "Вальц",
        coatColor: "rgb(56, 159, 117)",
        eyesColor: "yellow"
    },
    {
        firstName: "Виктор",
        lastName: "Онопко",
        coatColor: "rgb(215, 210, 55)",
        eyesColor: "green"
    },
    {
        firstName: "Юлия",
        lastName: "Топольницкая",
        coatColor: "rgb(0, 0, 0)",
        eyesColor: "pink"
    },
    {
        firstName: "Люпита",
        lastName: "Нионго",
        coatColor: "rgb(146, 100, 161)",
        eyesColor: "blue"
    },
    {
        firstName: "Вашингтон",
        lastName: "Ирвинг",
        coatColor: "rgb(0, 0, 0)",
        eyesColor: "yellow"
    }
];

var getName = function(peoples) {
    var randomName = Math.floor(Math.random() * peoples.length);
    var randomLastName = Math.floor(Math.random() * peoples.length);
    var result = peoples[randomName].firstName + ' ' + peoples[randomLastName].lastName;
    return result;
  };

var renderWizard = function(people){
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = getName(peoples);
    wizardElement.querySelector('.wizard-coat').style.fill = peoples[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = peoples[i].eyesColor;
    
    return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++){
    fragment.appendChild(renderWizard(peoples[i]));
}
similarListElement.appendChild(fragment);
