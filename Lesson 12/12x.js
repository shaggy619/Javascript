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
  if (randomNumber >= 0 && randomNumber < 0.33) {
    move = "✊";
  } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    move = "✌️";
  } else {
    move = "🖐️";
  }
}

//For auto playing the game
let isAuto = false;
let intervalId;
let autoPlayBtn = document.querySelector(".autoplay");
function autoPlay() {
  if (!isAuto) {
    intervalId = setInterval(() => {
      let move = computerMove();
      playGame(move);
    }, 1000);
    isAuto = true;
    autoPlayBtn.innerHTML = "Stop Play";
  } else {
    clearInterval(intervalId);
    isAuto = false;
    autoPlayBtn.innerHTML = "Auto Play";
  }
}

//To also play the game with keyboard
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    computerMove();
    playGame("✊");
  } else if (event.key === "p") {
    computerMove();
    playGame("🖐️");
  } else if (event.key === "s") {
    computerMove();
    playGame("✌️");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    displayConfirm();
  }
  //   } else if (event.key === "Backspace") {
  //     score.wins = 0;
  //     score.losses = 0;
  //     score.draws = 0;
  //     displayScore();
  //   }
});

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", displayConfirm);

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

//Display and confirmation message
let confirmMessageBox = document.querySelector(".confirm");
function displayConfirm() {
  confirmMessageBox.innerHTML = `<p>Are you sure you want to reset the score?
<button onclick = 'resetScore(); 
hideConfirm();' class='yes'> Yes </button> <button onclick = 'hideConfirm()' class = "no"> No </button> </p>`;
}

function hideConfirm() {
  confirmMessageBox.innerHTML = "";
}

//Yes No button working
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  displayScore();
}
