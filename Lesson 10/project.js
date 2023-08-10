//Subscribe button project Javascript
let subButton = document.querySelector(".sub-button");
function isSubscribed() {
  if (subButton.innerText === "Subscribe") {
    subButton.innerHTML = "Subscribed";
    subButton.classList.add("unsubscribe");
  } else {
    subButton.innerHTML = "Subscribe";
    subButton.classList.remove("unsubscribe");
  }
}

// Amazon Shipping Calculator
function calculateTotal() {
  let inputElement = document.querySelector(".input-value");
  let cost = Number(inputElement.value);
  if (cost < 40) {
    cost = cost + 10;
  }
  function displayCost() {
    let finalCost = document.querySelector(".calc-p");
    finalCost.innerHTML = `$${cost}`;
  }
  displayCost();
}
function handleEnter(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

//Rock Scissors Paper Project

let randomNumber = " ";
let savedMove = "";
let move = "";
let result = "";
let overallResult = "";
//To use value stored in local storage to be loaded first and if the score is null then use the default value as 0.
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};
displayScore();

//For computer move
function computerMove() {
  randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber >= 0 && randomNumber < 0.33) {
    move = "✊";
  } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    move = "✌️";
  } else {
    move = "✊";
  }
  console.log(move);
}

//To calculate the result
function playGame(playerMove) {
  if (playerMove === "✌️") {
    savedMove = "✌️";
    if (move == "✊") {
      result = "you lost the game!";
    } else if (move == "🖐️") {
      result = "you won the game!";
    } else {
      result = "the game is draw!";
    }
  } else if (playerMove === "✊") {
    savedMove = "✊";
    if (move == "✊") {
      result = "the game is draw!";
    } else if (move == "🖐️") {
      result = "you lost the game!";
    } else {
      result = "you won the game!";
    }
  } else {
    savedMove = "🖐️";
    if (move == "✊") {
      result = "you won the game!";
    } else if (move == "🖐️") {
      result = "the game is draw!";
    } else {
      result = "you lost the game!";
    }
  }

  //To calculate the overall result of wins, losses and draws
  if (result === "you won the game!") {
    score.wins += 1;
  } else if (result === "you lost the game!") {
    score.losses += 1;
  } else {
    score.draws += 1;
  }
  displayResult();
  displayMove();
  displayScore();

  //To save the score in local storage
  localStorage.setItem("score", JSON.stringify(score)); //We can only store strings as local storage so we need to convert any value into string to store value in local storage.

  //Display the overall score
}
function displayScore() {
  let resultP = document.querySelector(".result-p");
  resultP.innerHTML = `Wins:${score.wins} Losses:${score.losses} Draws:${score.draws}`;
}

//Display the result
function displayResult() {
  let winLose = document.querySelector(".win-loss-p");
  winLose.innerHTML = `Result: ${result}`;
  winLose.classList.add("big-font");
}

//Display the move
function displayMove() {
  let moveP = document.querySelector(".move-p");
  moveP.innerHTML = `You chose <span  class='css-emoji'>${savedMove}</span>- Computer chose <span class='css-emoji'>${move}</span>`;
}
