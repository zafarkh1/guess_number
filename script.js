let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");

let secretNum = document.querySelector(".number");
let scoreNum = document.querySelector(".score");
let highscoreNum = document.querySelector(".highscore");

let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

function displayMsg(message) {
  document.querySelector(".message").textContent = message;
}

checkBtn.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMsg("⛔ No number");
  } else if (guess === randomNum) {
    if (score > highscore) {
      highscoreNum.textContent = score;
    }
    secretNum.textContent = randomNum;
    displayMsg("🎉 Correct number!");

    document.body.style.backgroundColor = "#60b347";
    secretNum.style.width = "30rem";
  } else if (guess !== randomNum) {
    if (score > 1) {
      score--;
      scoreNum.textContent = score;
      displayMsg(guess > randomNum ? "📈 Too high!" : "📉 Too low!");
    } else {
      scoreNum.textContent = 0;
      displayMsg("❌ You lose the game!");
    }
  }
});

againBtn.addEventListener("click", () => {
	score = 10;
  randomNum = Math.floor(Math.random() * 20) + 1;
  scoreNum.textContent = score;

  displayMsg("Start guessing...");
  secretNum.textContent = "?";
  document.querySelector(".guess").value = "";

  document.body.style.backgroundColor = "#222";
  secretNum.style.width = "15rem";
});