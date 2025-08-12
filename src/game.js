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
let indexAction = 0;
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
  document.getElementById('bubbleState').style.visibility = 'hidden';
  console.log("Game over!");
}

function selectRandomAction() {
  indexAction = Math.floor(Math.random() * bubbleActions.length);
  return bubbleActions[indexAction]
}

function updateBubbleAction() {
  document.getElementById('bubbleState').src = selectRandomAction();
}

function isTheCorrectAction(actionSelected) {
  return actionSelected === indexAction;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('buttonEat').addEventListener('click', () => {
    if (isTheCorrectAction(0)) {
      increaseLifeBarByOne();
      console.log("Correct action!");
    } else {
      console.log("Incorrect action!");
    }
    updateBubbleAction();
  });

  document.getElementById('buttonPet').addEventListener('click', () => {
    if (isTheCorrectAction(1)) {
      increaseLifeBarByOne();
      console.log("Correct action!");
    } else {
      console.log("Incorrect action!");
    }
    updateBubbleAction();
  });

  document.getElementById('buttonSleep').addEventListener('click', () => {
    if (isTheCorrectAction(2)) {
      increaseLifeBarByOne();
      console.log("Correct action!");
    } else {
      console.log("Incorrect action!");
    }
    updateBubbleAction();
  });

  document.getElementById('buttonWash').addEventListener('click', () => {
    if (isTheCorrectAction(3)) {
      increaseLifeBarByOne();
      console.log("Correct action!");
    } else {
      console.log("Incorrect action!");
    }
    updateBubbleAction();
  });

  updateLifeBar();
  intervalId = setInterval(decreaseLifeBarByOne, 2000);
});