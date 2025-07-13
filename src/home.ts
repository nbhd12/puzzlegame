//Popup1 Home Page
const openbutton = document.getElementById('howicon') as HTMLButtonElement | null;
const HomeContainer = document.getElementById('HomeContainer') as HTMLElement | null;
const closebutton = document.getElementById('closeby') as HTMLButtonElement | null;

if (openbutton && HomeContainer && closebutton) {
  openbutton.addEventListener('click', () => {
    HomeContainer.classList.add('shew');
  });

  closebutton.addEventListener('click', () => {
    HomeContainer.classList.remove('shew');
  });
}


//Popup2 Home Page
const openbuttonone = document.getElementById('modal') as HTMLButtonElement | null;
const HomeContainerTwo = document.getElementById('HomeContainerTwo') as HTMLElement | null;
const closebuttonone = document.getElementById('close-modal') as HTMLButtonElement | null;

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