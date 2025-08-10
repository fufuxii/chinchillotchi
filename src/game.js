const lifeBar100 = "art/life-bar/life_bar_100.png";
const lifeBar75 = "art/life-bar/life_bar_75.png";
const lifeBar50 = "art/life-bar/life_bar_50.png";
const lifeBar25 = "art/life-bar/life_bar_25.png";
const lifeBar0 = "art/life-bar/life_bar_0.png";
const gameOver = "art/chinchilla/chinchilla_dead.png";
let intervalId = null;
let counterBar = 5;

function getLifeBar(counterBar) {
  switch (counterBar) {
    case 5: return lifeBar100;
    case 4: return lifeBar75;
    case 3: return lifeBar50;
    case 2: return lifeBar25; 
    case 1: return lifeBar0;
  }
}

function increaseLifeBarByOne() {
  if (counterBar == 5) {
    counterBar = 5;
  }
  else {
    counterBar++;
  }
  console.log(`Counter: ${counterBar}`);
}

function isGameOver(counterBar) {
  return counterBar <= 1;
}

intervalId = setInterval(() => {
  if (isGameOver(counterBar)) {
    document.getElementById('chinchillaArt').src = gameOver;
    clearInterval(intervalId);
    console.log('Game over!');
  }
  else {
    document.getElementById('lifeBar').src = getLifeBar(counterBar);
    counterBar--;   
  }
}, 2000);

document.addEventListener('DOMContentLoaded', function() {
  const eat = document.getElementById('buttonEat');
  const pet = document.getElementById('buttonPet');
  const sleep = document.getElementById('buttonSleep'); 
  const wash = document.getElementById('buttonWash'); 

  eat.addEventListener('click', function() {
    increaseLifeBarByOne();
    document.getElementById('lifeBar').src = getLifeBar(counterBar);
  }); 
  pet.addEventListener('click', function() {
    increaseLifeBarByOne();
    document.getElementById('lifeBar').src = getLifeBar(counterBar);
  });
  sleep.addEventListener('click', function() {
    increaseLifeBarByOne();
    document.getElementById('lifeBar').src = getLifeBar(counterBar);
  });
  wash.addEventListener('click', function() {
    increaseLifeBarByOne();
    document.getElementById('lifeBar').src = getLifeBar(counterBar);
  });
});