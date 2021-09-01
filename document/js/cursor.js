const mosueCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mosueCursor.style.left = e.pageX + "px";
    mosueCursor.style.top = e.pageY + "px";
    mosueCursor.style.display = "block"
}