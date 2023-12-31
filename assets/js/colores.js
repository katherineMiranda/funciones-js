const father = document.getElementById("container");
const keyBox = document.getElementById("key");

father.addEventListener("click", (e) => {
  if (e.target && e.target.className == "blackBox") {
    if (e.target.style.background == "black") {
      e.target.style.background = e.target.style.color;
    } else {
      e.target.style.background = "black";
    }
  }
});

let color;

const getColor = (key) => {
  if (key === "a") {
    return "pink";
  } else if (key === "s") {
    return "orange";
  } else if (key === "d") {
    return "cornflowerblue";
  } else if (key === "q") {
    return "violet";
  } else if (key === "w") {
    return "grey";
  } else if (key === "e") {
    return "brown";
  } else {
    return "";
  }
};

const paintKeyBox = (color) => {
  keyBox.style.background = color;
};

const addPaintBox = (color) => {
  const newBox = document.createElement("div");
  newBox.setAttribute(
    "style",
    `width: 200px; height: 200px; background: ${color}; border: 2px solid black;`
  );
  father.appendChild(newBox);
};

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key;
  color = getColor(pressedKey);
  if (pressedKey === "a" || pressedKey === "s" || pressedKey === "d") {
    paintKeyBox(color);
  }
  if (pressedKey === "q" || pressedKey === "w" || pressedKey === "e") {
    addPaintBox(color);
  }
});
