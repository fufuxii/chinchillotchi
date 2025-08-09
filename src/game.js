const lifeBar100 = "art/life-bar/life_bar_100.png";
const lifeBar75 = "art/life-bar/life_bar_75.png";
const lifeBar50 = "art/life-bar/life_bar_50.png";
const lifeBar25 = "art/life-bar/life_bar_25.png";
const lifeBar0 = "art/life-bar/life_bar_0.png";
let intervalId = null;
let counterBar = 1;

function getLifeBar(counterBar) {
  switch (counterBar) {
    case 1: return lifeBar100;
    case 2: return lifeBar75;
    case 3: return lifeBar50;
    case 4: return lifeBar25; 
    case 5: return lifeBar0;
  }
}

function isGameOver(counterBar) {
  return counterBar >= 5;
}

intervalId = setInterval(() => {
  document.getElementById('lifeBar').src = getLifeBar(counterBar);
  if (isGameOver(counterBar)) {
    // document.getElementById('chinchillaArt').src = 
    clearInterval(intervalId);
    console.log('Game over!');
  }
  else {
    counterBar++;   
  }
}, 2000);