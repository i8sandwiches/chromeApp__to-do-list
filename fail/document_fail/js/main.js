const getMainScreen = document.querySelector(".get__main-screen");
const buttonInner = document.querySelector(".button__inner");
const sideLogo = document.querySelector(".nav-bar a h5");
const logoUnderLine = document.querySelector(".nav-bar a");
const wobbing=document.querySelector(".wobbing");

const MAIN_SCREEN="main-screen";
const DISAPPEAR="disappear";
const MAIN_SCREEN_RESET = "main-screen__reset";

getMainScreen.addEventListener("click", mainScreenAppear);
logoUnderLine.addEventListener("click", mainScreenDisappear);

function mainScreenAppear() {
    buttonInner.classList.add(MAIN_SCREEN);
    mosueCursor.setAttribute("style", "z-index: 51;");
    sideLogo.classList.remove(DISAPPEAR);
    logoUnderLine.setAttribute("style","border-bottom: 3px solid white; padding-right: 60px;");
    buttonInner.classList.remove(MAIN_SCREEN_RESET);
    wobbing.classList.add(DISAPPEAR);
}

function mainScreenDisappear() {
    buttonInner.classList.remove(MAIN_SCREEN);
    buttonInner.classList.add(MAIN_SCREEN_RESET);
    mosueCursor.setAttribute("style", "z-index: 1;");
    wobbing.classList.remove(DISAPPEAR);
    logoUnderLine.removeAttribute("style","border-bottom: 3px solid white; padding-right: 60px;");
    sideLogo.classList.add(DISAPPEAR);
}
