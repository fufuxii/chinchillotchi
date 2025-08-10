const lifeBar = [
  "art/life-bar/life_bar_0.png",
  "art/life-bar/life_bar_25.png",
  "art/life-bar/life_bar_50.png",
  "art/life-bar/life_bar_75.png",
  "art/life-bar/life_bar_100.png"
];

const bubbleActions = [
  "art/bubble/bubble_eat.png",
  "art/bubble/bubble_pet.png",
  "art/bubble/bubble_sleep.png",
  "art/bubble/bubble_wash.png"
];

const gameOverImg = "art/chinchilla/chinchilla_dead.png";
let intervalId = null;
let counterBar = 5;

function getLifeBar() {
  if (counterBar >= 1 || counterBar <= 5) {
    return lifeBar[counterBar - 1];
  }
  else {
    console.log("Invalid counterBar value!");
  }
}

function updateLifeBar() {
  document.getElementById('lifeBar').src = getLifeBar(counterBar);
}

function increaseLifeBarByOne() {
  if (counterBar < 5) {
    counterBar++;
    updateLifeBar();
  }
  else {
    counterBar = 5;
  }
}

function decreaseLifeBarByOne() {
  if (counterBar > 1) {
    counterBar--;
    updateLifeBar();
  } 
  else {
    endGame();
  }
}

function endGame() {
  clearInterval(intervalId);
  document.getElementById('chinchillaArt').src = gameOverImg;
  console.log("Game over!");
}

function selectRandomAction() {
  let randomIndex = Math.floor(Math.random() * bubbleActions.length);
  return bubbleActions[randomIndex];
}

function updateBubbleAction() {
  document.getElementById('bubbleState').src = selectRandomAction();
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#buttonEat, #buttonPet, #buttonSleep, #buttonWash')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        increaseLifeBarByOne();
        updateBubbleAction(); 
      });
    });
  updateLifeBar();
  intervalId = setInterval(() => {
    decreaseLifeBarByOne();
  }, 2000);
});