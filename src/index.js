import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello HI";

  return element;
}

document.body.appendChild(component());
