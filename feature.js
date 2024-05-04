const featureLeftSwitch = document.querySelector('.feat-section-six .heading .switches .left-switch')
const featureRightSwitch = document.querySelector('.feat-section-six .heading .switches .right-switch')
const cards = document.querySelectorAll('.feat-section-six .cards-container .card')
const questionLeftSwitch = document.querySelector('.feat-section-two .heading .switches .left-switch')
const questionRightSwitch = document.querySelector('.feat-section-two .heading .switches .right-switch')
const questionCards = document.querySelectorAll('.feat-section-two .card-container .card')
const sectionEight = document.querySelector('.section-eight')
const sectionEightVector = document.querySelector('.section-eight .vector')
const sectionEightContent = document.querySelector('.section-eight .main-section .content')
const sectionEightForm = document.querySelector('.section-eight .main-section .form')

let translation = 0;
let questionTranslation = 0;


featureRightSwitch.addEventListener('click', (e) => {
    translation += -500;

    if (translation <= -1500) {
        e.preventDefault()
        translation = -1500
    } else {
        cards.forEach((card) => {
            card.style.transform = `translateX(${translation}px)`;
        });
    }
});


featureLeftSwitch.addEventListener('click', (e) => {
    translation += 500;

    if (translation = 0) {
        e.preventDefault()
        translation = 0
    } else {
        cards.forEach((card) => {
            card.style.transform = `translateX(${translation}px)`;
        });
    }
})

questionRightSwitch.addEventListener('click', (e) => {
    questionTranslation += -1000;

    if (questionTranslation <= -3000) {
        e.preventDefault()
        questionTranslation = -3000
    } else {
        questionCards.forEach((card) => {
            card.style.transform = `translateX(${questionTranslation}px)`;
        });
    }
});


questionLeftSwitch.addEventListener('click', (e) => {
    questionTranslation += 1000;

    if (questionTranslation = 0) {
        e.preventDefault()
        questionTranslation = 0
    } else {
        questionCards.forEach((card) => {
            card.style.transform = `translateX(${questionTranslation}px)`;
        });
    }
})

sectionEight.addEventListener('click', sectionEightAnimation)
