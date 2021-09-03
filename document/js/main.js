const getMainScreen = document.querySelector(".get__main-screen");
const buttonInner = document.querySelector(".button__inner");

const MAIN_SCREEN="main-screen";

getMainScreen.addEventListener("click", mainScreenAppear);

function mainScreenAppear() {
    buttonInner.classList.add(MAIN_SCREEN);
    mosueCursor.setAttribute("style", "z-index: 51;");
}

