let input = document.querySelector("input");
let button = document.querySelector("#boton1");
let button2 = document.querySelector("#boton2");

let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let inputValue = input.value;

  let li = document.createElement("li");
  li.textContent = inputValue;

  ul.appendChild(li);

  input.value = "";
});

button2.addEventListener("click", function () {
    let li = document.querySelector("li");
    ul.removeChild(li);
});
