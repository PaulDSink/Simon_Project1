const redColorOriginal = '#ff000075';
const yellowColorOriginal = '#ffff0075';
const blueColorOriginal = '#0000ff75';
const greenColorOriginal = '#00ff0075';
const redColorIllum = '#ff0000';
const yellowColorIllum = '#ffff00';
const blueColorIllum = '#0000ff';
const greenColorIllum = '#00ff00';

const redSound = document.querySelector('#red-sound');
const yellowSound = document.querySelector('#yellow-sound');
const blueSound = document.querySelector('#blue-sound');
const greenSound = document.querySelector('#green-sound');

const startBtn = document.querySelector('#start');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const score = document.querySelector('#score');
const highscore = document.querySelector('#highscore');
const turn = document.querySelector('#turn');

const content = document.querySelector('.content');
const loseScreen = document.querySelector('#lose-screen');
const loseMessage = document.querySelector('#lose-message');
const resetBtn = document.querySelector('#reset');

const storage = window.localStorage;

const colors = ['red', 'yellow', 'blue', 'green'];
let randomSequence = [];
let playerSequence = [];

function displayHighScore() {
    if(storage.highscore == undefined) {
        storage.setItem('highscore', '0');
    }
    highscore.innerText = `Your Highscore: ${storage.highscore}`;
}

function saveHighScore() {
    if(randomSequence.length - 1 > parseInt(storage.highscore)) {
        storage.highscore = String(randomSequence.length - 1);
    }
    displayHighScore();
}

function displayLoseScreen() {
    content.classList.add('hidden');
    loseScreen.classList.remove('hidden');
}

function resetLoseScreen() {
    content.classList.remove('hidden');
    loseScreen.classList.add('hidden');
}

resetBtn.addEventListener('click', resetLoseScreen);

function resetGame() {
    saveHighScore();
    startBtn.children[0].innerText = "Start!";
    turn.innerText = 'Press Start!';
    randomSequence = [];
    playerSequence = [];
    startBtnEventListener();
}

function checkColor() {
    if(playerSequence.length < randomSequence.length) {
        if(playerSequence[playerSequence.length - 1] == randomSequence[playerSequence.length - 1]) {
            playerTurn();
        } else {
            loseMessage.innerText = `Wrong color! You clicked ${playerSequence[playerSequence.length - 1]} but the correct color was ${randomSequence[playerSequence.length - 1]}. Press the reset button and try again!`;
            displayLoseScreen();
            resetGame();
        }
    } else if(playerSequence.length == randomSequence.length) {
        if(playerSequence[playerSequence.length - 1] == randomSequence[playerSequence.length - 1]) {
            playerSequence = [];
            setTimeout(addRandomColor, 500);
        } else {
            loseMessage.innerText = `Wrong color! You clicked ${playerSequence[playerSequence.length - 1]} but the correct color was ${randomSequence[playerSequence.length - 1]}. Press the reset button and try again!`;
            displayLoseScreen();
            resetGame();
        }
    }
}

function btnClicked() {
    event.preventDefault();
    resetAnimation();
    removeColorBtnEvent();
    console.log('clicked');
    playerSequence.push(this.id);
    checkColor();
}

function clickAnimation() {
    event.preventDefault();
    this.classList.add('btnPressed');
    if(this.id == 'red') {
        redBtn.style.backgroundColor = redColorIllum;
        redSound.play();
    } else if (this.id == 'yellow') {
        yellowBtn.style.backgroundColor = yellowColorIllum;
        yellowSound.play();
    } else if (this.id == 'blue') {
        blueBtn.style.backgroundColor = blueColorIllum;
        blueSound.play();
    } else if (this.id == 'green') {
        greenBtn.style.backgroundColor = greenColorIllum;
        greenSound.play();
    }
}

function resetAnimation() {
    redBtn.classList.remove('btnPressed');
    yellowBtn.classList.remove('btnPressed');
    blueBtn.classList.remove('btnPressed');
    greenBtn.classList.remove('btnPressed');
    startBtn.classList.remove('btnPressed');
    resetColors();
}

function playerTurn() {
    turn.innerText = 'Player\'s Turn!';
    console.log('playerturn');
    //events for mobile phone useage
    redBtn.addEventListener('touchend', btnClicked);
    redBtn.addEventListener('touchstart', clickAnimation);
    yellowBtn.addEventListener('touchend', btnClicked);
    yellowBtn.addEventListener('touchstart', clickAnimation);
    blueBtn.addEventListener('touchend', btnClicked);
    blueBtn.addEventListener('touchstart', clickAnimation);
    greenBtn.addEventListener('touchend', btnClicked);
    greenBtn.addEventListener('touchstart', clickAnimation);
    //events for regular device useage
    redBtn.addEventListener('mouseup', btnClicked);
    redBtn.addEventListener('mousedown', clickAnimation);
    yellowBtn.addEventListener('mouseup', btnClicked);
    yellowBtn.addEventListener('mousedown', clickAnimation);
    blueBtn.addEventListener('mouseup', btnClicked);
    blueBtn.addEventListener('mousedown', clickAnimation);
    greenBtn.addEventListener('mouseup', btnClicked);
    greenBtn.addEventListener('mousedown', clickAnimation);
}

function removeColorBtnEvent() {
    console.log('events removed');
    //events for mobile phone useage
    redBtn.removeEventListener('touchend', btnClicked);
    redBtn.removeEventListener('touchstart', clickAnimation);
    yellowBtn.removeEventListener('touchend', btnClicked);
    yellowBtn.removeEventListener('touchstart', clickAnimation);
    blueBtn.removeEventListener('touchend', btnClicked);
    blueBtn.removeEventListener('touchstart', clickAnimation);
    greenBtn.removeEventListener('touchend', btnClicked);
    greenBtn.removeEventListener('touchstart', clickAnimation);
    //events for regular device useage
    redBtn.removeEventListener('mouseup', btnClicked);
    redBtn.removeEventListener('mousedown', clickAnimation);
    yellowBtn.removeEventListener('mouseup', btnClicked);
    yellowBtn.removeEventListener('mousedown', clickAnimation);
    blueBtn.removeEventListener('mouseup', btnClicked);
    blueBtn.removeEventListener('mousedown', clickAnimation);
    greenBtn.removeEventListener('mouseup', btnClicked);
    greenBtn.removeEventListener('mousedown', clickAnimation);
}

function resetColors() {
    redBtn.style.backgroundColor = redColorOriginal;
    yellowBtn.style.backgroundColor = yellowColorOriginal;
    blueBtn.style.backgroundColor = blueColorOriginal;
    greenBtn.style.backgroundColor = greenColorOriginal;
    console.log('colors reset');
}

function illuminateRed() {
    redBtn.style.backgroundColor = redColorIllum;
    redSound.play();
    setTimeout(resetColors, 900);
}

function illuminateYellow() {
    yellowBtn.style.backgroundColor = yellowColorIllum;
    yellowSound.play();
    setTimeout(resetColors, 900)
}

function illuminateBlue() {
    blueBtn.style.backgroundColor = blueColorIllum;
    blueSound.play();
    setTimeout(resetColors, 900)
}

function illuminateGreen() {
    greenBtn.style.backgroundColor = greenColorIllum;
    greenSound.play();
    setTimeout(resetColors, 900)
}

function displaySequence() {
    randomSequence.forEach((color, index) => {
        if(color == 'red') {
            setTimeout(illuminateRed, 1000 * index);
        } else if(color == 'yellow') {
            setTimeout(illuminateYellow, 1000 * index);
        } else if(color == 'blue') {
            setTimeout(illuminateBlue, 1000 * index);
        } else if(color == 'green') {
            setTimeout(illuminateGreen, 1000 * index);
        }
    })
}

function addRandomColor() {
    turn.innerText = 'Memorize the sequence!';
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomSequence.push(randomColor);
    score.innerText = `Score: ${randomSequence.length - 1}`
    displaySequence();
    setTimeout(playerTurn, 1000 * randomSequence.length);
}

function startGame() {
    event.preventDefault();
    resetAnimation();
    startBtn.children[0].innerText = "";
    //events for mobile phone useage
    startBtn.removeEventListener('touchend', startGame);
    startBtn.removeEventListener('touchstart', clickAnimation);
    //events for regular device useage
    startBtn.removeEventListener('mouseup', startGame);
    startBtn.removeEventListener('mousedown', clickAnimation);
    addRandomColor();
    console.log(randomSequence);
}


function startBtnEventListener(){
    //events for mobile phone useage
    startBtn.addEventListener('touchend', startGame);
    startBtn.addEventListener('touchstart', clickAnimation);
    //events for regular device useage
    startBtn.addEventListener('mouseup', startGame);
    startBtn.addEventListener('mousedown', clickAnimation);
}

displayHighScore();

startBtnEventListener();