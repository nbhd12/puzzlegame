"use strict";
//Popup1 Home Page
const openbutton = document.getElementById('howicon');
const HomeContainer = document.getElementById('HomeContainer');
const closebutton = document.getElementById('closeby');
if (openbutton && HomeContainer && closebutton) {
    openbutton.addEventListener('click', () => {
        HomeContainer.classList.add('shew');
    });
    closebutton.addEventListener('click', () => {
        HomeContainer.classList.remove('shew');
    });
}
//Popup2 Home Page
const openbuttonone = document.getElementById('modal');
const HomeContainerTwo = document.getElementById('HomeContainerTwo');
const closebuttonone = document.getElementById('close-modal');
if (openbuttonone && HomeContainerTwo && closebuttonone) {
    openbuttonone.addEventListener('click', () => {
        HomeContainerTwo.classList.add('shin');
    });
    closebuttonone.addEventListener('click', () => {
        HomeContainerTwo.classList.remove('shin');
    });
}
//hover sound
const hoverSound = new Audio('./Assets/Sounds/ButtonHoverSound.mp3');
hoverSound.volume = 0.1;
const Hover = document.getElementById('try');
if (Hover) {
    Hover.addEventListener('mouseenter', () => {
        hoverSound.play();
    });
}
