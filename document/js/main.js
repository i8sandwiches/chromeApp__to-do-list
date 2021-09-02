const getMainScreen = document.querySelector(".get__main-screen");
const buttonInner = document.querySelector(".button__inner");

const MAIN_SCREEN="main-screen";
const DISAPPEAR="disappear"

getMainScreen.addEventListener("click", mainScreenToggle);

//mainscreen effect
function mainScreenToggle() {
    buttonInner.classList.add(MAIN_SCREEN);
    getMainScreen.classList.add(DISAPPEAR);
}