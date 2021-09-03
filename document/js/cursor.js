const mosueCursor = document.querySelector(".cursor");
const beSmallCursor = document.querySelector(".be__small-cursor")

const BE_SMALL_CURSOR = "be__small-cursor";
const GET_SMALL="small-cursor";

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

//mouse effect
function cursor(e) {
    mosueCursor.style.left = e.pageX + "px";
    mosueCursor.style.top = e.pageY + "px";
    mosueCursor.style.display = "block";
}

function activeCursor(e) {
    const  item=e.target;
    if(item.classList.contains(BE_SMALL_CURSOR)){
        mosueCursor.classList.add(GET_SMALL);
    } else {
        mosueCursor.classList.remove(GET_SMALL);
    }
}
