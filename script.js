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

const colors = ['red', 'yellow', 'blue', 'green'];
const randomSequence = [];
const playerSequence = [];

let timer;

function beginTimer() {
    timer = setTimeout(resetColors, 1000);
}

function resetColors() {
    redBtn.style.backgroundColor = redColorOriginal;
    yellowBtn.style.backgroundColor = yellowColorOriginal;
    blueBtn.style.backgroundColor = blueColorOriginal;
    greenBtn.style.backgroundColor = greenColorOriginal;
}

function illuminateRed() {
    redBtn.style.backgroundColor = redColorIllum;
    beginTimer();
}

function illuminateYellow() {
    yellowBtn.style.backgroundColor = yellowColorIllum;
    beginTimer();
}

function illuminateBlue() {
    blueBtn.style.backgroundColor = blueColorIllum;
    beginTimer();
}

function illuminateGreen() {
    greenBtn.style.backgroundColor = greenColorIllum;
    beginTimer();
}

function displaySequence() {
    randomSequence.forEach(color => {
        if(color == 'red') {
            illuminateRed();
        } else if(color == 'yellow') {
            illuminateYellow();
        } else if(color == 'blue') {
            illuminateBlue();
        } else if(color == 'green') {
            illuminateGreen();
        }
    })
}

function addRandomColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomSequence.push(randomColor);
    displaySequence();
}

function startGame() {
    addRandomColor();
    console.log(randomSequence);
}



startBtn.addEventListener('click', startGame)