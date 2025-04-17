// Declaro variables para mi carta
let suit = ["♦", "♥", "♠", "♣"];
let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function getRandomCard() {
  // Genero un número aleatorio entre 0 y la longitud de la carta
  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNumber = Math.floor(Math.random() * cardNumber.length);

  // Retorno la carta aleatoria
  return {value: cardNumber[randomNumber], suit: suit[randomSuit]};
}

console.log(getRandomCard());

//Convierte los valores de la carta a números
function getCardvalue(value) {

  if (value === "A") return 1;
  if (value === "J") return 11;
  if (value === "Q") return 12;
  if (value === "K") return 13;

  return value;
}
console.log(getCardvalue(cardNumber[10]));

function createdCard (c) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.classList.add("card");

    let numberDiv = document.createElement("div");
    numberDiv.className = "number";
    numberDiv.textContent = c.value;

    let top = document.createElement("div");
    top.className = `top ${c.suit === "♦" || c.suit === "♥" ? "red" : "black"}`;
    top.textContent = c.suit;

    let bottom = document.createElement("div");
    bottom.className = `bottom ${c.suit === "♦" || c.suit === "♥" ? "red" : "black"}`;
    bottom.textContent = c.suit;

    cardDiv.appendChild(numberDiv);
    cardDiv.appendChild(top);
    cardDiv.appendChild(bottom);

    return cardDiv;
}

let cardArr = []; // lista para almacenar el valor de las cartas para ordenarlas

function drawCard() {
    let count = document.getElementById("count").value;
    let cardContainer = document.getElementById("card-container");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = ""; // Limpiar el contenedor antes de dibujar nuevas cartas

    cardArr = []; // Reiniciar el array de cartas
    
    for (let i = 0; i < count; i++) {
        
        let card = getRandomCard();
        let cardElement = createdCard(card);
        cardContainer.appendChild(cardElement);
        cardArr.push(card); // Guardar el valor de la carta en el array
    }
}

console.log(cardArr);

let drawbtn = document.getElementById("draw-btn");
drawbtn.addEventListener("click", drawCard);

// Ordenar con la funcio bubble sort

function bubbleSort(arr) {

    let cardLog = document.getElementById("card-log"); // obtener el numero de cartas apartir del input del usuario
    cardLog.innerHTML = ""; // Limpiar el contenedor de cartas
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (getCardvalue(arr[j].value) > getCardvalue(arr[j + 1].value)) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    
    let stepDiv = document.createElement("div");
    stepDiv.classList.add("card-container");
    let stepTitle = document.createElement("p");
    stepTitle.textContent = `Paso ${i + 1}`;

    cardLog.appendChild(stepTitle);

    arr.forEach(card => {
      stepDiv.appendChild(createdCard(card));
    });

    cardLog.appendChild(stepDiv);
    }
    return arr;
}

document.getElementById("sort-btn").addEventListener("click", () =>  bubbleSort(cardArr));// Llama a la función de ordenamiento al hacer clic en el botón "Ordenar"

// Reset

function resetDeck() {
    let cardContainer = document.getElementById("card-container");
    let cardlog = document.getElementById("card-log"); // obtener el numero de cartas apartir del input del usuario
    cardContainer.innerHTML = "";
    cardlog.innerHTML = ""; // Limpiar el contenedor de cartas
}

let reset = document.getElementById ("reset-btn");
reset.addEventListener("click", resetDeck);
