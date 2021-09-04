const mainButton = document.querySelector(".button");
const logo = document.querySelector("#logo");
const main= document.querySelector(".main");

const BE_MAIN = "be-main";
const HIDDEN = "hidden";

mainButton.addEventListener("click", toBeMain);
logo.addEventListener("click", toBeButton);

function toBeMain(){
    mainButton.classList.remove("button__hover");
    mainButton.classList.add(BE_MAIN);
    logo.setAttribute("style","color: #131313; font-weight:600;");
    main.classList.remove(HIDDEN);
}
function toBeButton(){
    mainButton.classList.remove(BE_MAIN);
    mainButton.classList.add("button__hover")
    logo.removeAttribute("style","color: #131313; font-weight:600;");
    main.classList.add(HIDDEN);
}