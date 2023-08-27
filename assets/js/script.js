

const element = document.getElementById("ele1");

function pintar(htmlElemet, color = "green") {
    if (htmlElemet.style.backgroundColor != color) {
        htmlElemet.style.backgroundColor = color;
    } else {
        htmlElemet.style.backgroundColor = "white";
    }
}

element.addEventListener("click", (e) => {
    pintar(e.target, "yellow");
});
