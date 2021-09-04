const mainButton = document.querySelector(".button");
const logo = document.querySelector("#logo");
const hiddenLogo = document.querySelector("#hidden_logo");

const BE_MAIN = "be-main";

mainButton.addEventListener("click", toBeMain);
logo.addEventListener("click", toBeButton);

function toBeMain(){
    mainButton.classList.remove("button__hover");
    mainButton.classList.add(BE_MAIN);
    logo.setAttribute("style","color: #131313; font-weight:600;");
}
function toBeButton(){
    mainButton.classList.remove(BE_MAIN);
    logo.removeAttribute("style","color: #131313; font-weight:600;");
    mainButton.classList.add("button__hover");
}