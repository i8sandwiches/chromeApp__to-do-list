const mainButton = document.querySelector(".button");
const logo = document.querySelector("#logo");
const main= document.querySelector(".main");
const todoContainer= document.querySelector(".right-container__to-do-list");

const BE_MAIN = "be-main";
const HIDDEN = "hidden";
const NONE = "none";

mainButton.addEventListener("click", toBeMain);
logo.addEventListener("click", toBeButton);

function toBeMain(){
    mainButton.classList.remove("button__hover");
    mainButton.classList.add(BE_MAIN);
    logo.setAttribute("style","color: #131313; font-weight:600;");
    main.classList.remove(HIDDEN);

    setTimeout(none,1200);
    function none () {
        todoContainer.classList.remove(NONE);
    }

    //if the number of todo is over 10, it can stop make more todo
    const theNumberOfTodo= document.getElementsByClassName("todo").length;
    if (theNumberOfTodo >= 10) {
        todoButton.setAttribute("style", "pointer-events: none; opacity: 0.1;")
    } else {
        todoButton.removeAttribute("style", "pointer-events: none; opacity: 0.1;")
    }
}

function toBeButton(){
    mainButton.classList.remove(BE_MAIN);
    mainButton.classList.add("button__hover")
    logo.removeAttribute("style","color: #131313; font-weight:600;");
    main.classList.add(HIDDEN);
    todoContainer.classList.add(NONE);

}


