let cursor = document.getElementById("cursor");
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousedown", () => {
  mouseCursor.classList.add("mouse-down")
})

window.addEventListener("mouseup", () => {
  mouseCursor.classList.remove("mouse-down")
})

function onMouseOver() {
  mouseCursor.classList.add("mouse-over")
}

function onMouseOut() {
  mouseCursor.classList.remove("mouse-over")
}

document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = (e.clientX) + "px",
  cursor.style.top = (e.clientY) + "px";
});


