const redColorOriginal = '#ff000075';
const yellowColorOriginal = '#ffff0075';
const blueColorOriginal = '#0000ff75';
const greenColorOriginal = '#00ff0075';
const redColorIllum = '#ff0000';
const yellowColorIllum = '#ffff00';
const blueColorIllum = '#0000ff';
const greenColorIllum = '#00ff00';

const startBtn = document.querySelector('#start');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const score = document.querySelector('#score');
const turn = document.querySelector('#turn');

const colors = ['red', 'yellow', 'blue', 'green'];
let randomSequence = [];
let playerSequence = [];


function resetGame() {
    randomSequence = [];
    playerSequence = [];
    startBtnEventListener();
}

function checkColor() {
    if(playerSequence.length < randomSequence.length) {
        if(playerSequence[playerSequence.length - 1] == randomSequence[playerSequence.length - 1]) {
            playerTurn();
        } else {
            alert(`Wrong color! You clicked ${playerSequence[playerSequence.length - 1]} but the correct color was ${randomSequence[playerSequence.length - 1]}. Press the start button to try again!`);
            resetGame();
        }
    } else if(playerSequence.length == randomSequence.length) {
        if(playerSequence[playerSequence.length - 1] == randomSequence[playerSequence.length - 1]) {
            playerSequence = [];
            setTimeout(addRandomColor, 500);
        } else {
            alert(`Wrong color! You clicked ${playerSequence[playerSequence.length - 1]} but the correct color was ${randomSequence[playerSequence.length - 1]}. Press the start button to try again!`);
            resetGame();
        }
    }
}

function btnClicked() {
    resetAnimation();
    removeColorBtnEvent();
    console.log('clicked');
    playerSequence.push(this.id);
    checkColor();
}

function clickAnimation() {
    this.classList.add('btnPressed');
    if(this.id == 'red') {
        redBtn.style.backgroundColor = redColorIllum;
    } else if (this.id == 'yellow') {
        yellowBtn.style.backgroundColor = yellowColorIllum;
    } else if (this.id == 'blue') {
        blueBtn.style.backgroundColor = blueColorIllum;
    } else if (this.id == 'green') {
        greenBtn.style.backgroundColor = greenColorIllum;
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
    setTimeout(resetColors, 900);
}

function illuminateYellow() {
    yellowBtn.style.backgroundColor = yellowColorIllum;
    setTimeout(resetColors, 900)
}

function illuminateBlue() {
    blueBtn.style.backgroundColor = blueColorIllum;
    setTimeout(resetColors, 900)
}

function illuminateGreen() {
    greenBtn.style.backgroundColor = greenColorIllum;
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
    resetAnimation();
    startBtn.removeEventListener('mouseup', startGame);
    startBtn.removeEventListener('mousedown', btnClicked);
    addRandomColor();
    console.log(randomSequence);
}


function startBtnEventListener(){
    startBtn.addEventListener('mouseup', startGame);
    startBtn.addEventListener('mousedown', clickAnimation);
}

startBtnEventListener();