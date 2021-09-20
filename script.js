const button = document.querySelector(".button")
const container = document.querySelector(".main-container");
let numberContent = 1;

addElement = () => {

    const newEl = document.createElement("div");

    newEl.textContent = numberContent;

    container.appendChild(newEl);
    newEl.classList.add('newElement');

    if (numberContent % 5 == 0) {

        newEl.classList.add('newElement--five');
    }
   
    numberContent++;
}

button.addEventListener("click", addElement);
