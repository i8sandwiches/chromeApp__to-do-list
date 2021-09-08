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

    setTimeout(here,1200);
    function here () {
        todoContainer.classList.remove(NONE);
    }

    mainButton.classList.remove("button__hover");
    mainButton.classList.add(BE_MAIN);
    logo.setAttribute("style","color: #131313; font-weight:600;");
    main.classList.remove(HIDDEN);

    //if the number of todo is over 10, it can stop make more todo
    const theNumberOfTodo= document.getElementsByClassName("todo").length;
    if (theNumberOfTodo >= 10) {
        todoButton.setAttribute("style", "pointer-events: none; opacity: 0.3;");
        todoInput.setAttribute("style", "pointer-events:none; opacity: 0.3;");
        todoInput.placeholder = "max todo list is '10'";
    } else {
        todoButton.removeAttribute("style", "pointer-events: none; opacity: 0.3;");
        todoInput.removeAttribute("style", "pointer-events: none; opacity: 0.3;");
        todoInput.placeholder = "";
    }
}

function toBeButton(){

    setTimeout(none, 0050);
    function none () {
        todoContainer.classList.add(NONE);
    }

    mainButton.classList.remove(BE_MAIN);
    mainButton.classList.add("button__hover")
    logo.removeAttribute("style","color: #131313; font-weight:600;");
    main.classList.add(HIDDEN);
}

