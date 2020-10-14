//variables for the hex codes of different colors used
const redColorOriginal = '#ff000075';
const yellowColorOriginal = '#ffff0075';
const blueColorOriginal = '#0000ff75';
const greenColorOriginal = '#00ff0075';
const redColorIllum = '#ff0000';
const yellowColorIllum = '#ffff00';
const blueColorIllum = '#0000ff';
const greenColorIllum = '#00ff00';

//variables for audio
const redSound = document.querySelector('#red-sound');
const yellowSound = document.querySelector('#yellow-sound');
const blueSound = document.querySelector('#blue-sound');
const greenSound = document.querySelector('#green-sound');

//variables for various buttons and on screen elements. Necessary for DOM manipulation
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

//localStorage is for remembering the player's highest score
const storage = window.localStorage;

//arrays. colors is possible color choices that can be added to the randomSequence and playerSequence arrays.
const colors = ['red', 'yellow', 'blue', 'green'];
let randomSequence = [];
let playerSequence = [];

//changes the value of high score displayed in document
function displayHighScore() {
    if(storage.highscore == undefined) {
        storage.setItem('highscore', '0');
    }
    highscore.innerText = `Your Highscore: ${storage.highscore}`;
}

//updates the players high score if it is larger than the current high score in localStorage. Then envokes function to display new high score
function saveHighScore() {
    if(randomSequence.length - 1 > parseInt(storage.highscore)) {
        storage.highscore = String(randomSequence.length - 1);
    }
    displayHighScore();
}

//hides the game screen and displays the losing screen
function displayLoseScreen() {
    content.classList.add('hidden');
    loseScreen.classList.remove('hidden');
}

//when lose screen is displayed, function resets back to normal, hiding lose screen and redisplaying game screen
function resetLoseScreen() {
    content.classList.remove('hidden');
    loseScreen.classList.add('hidden');
}

//event to envoke resetLoseScreen function using reset button
resetBtn.addEventListener('click', resetLoseScreen);

//function to reset game after player loses. Resets arrays and elements and allows player to hit start again to begin new game
function resetGame() {
    saveHighScore();
    startBtn.children[0].innerText = "Start!";
    turn.innerText = 'Press Start!';
    randomSequence = [];
    playerSequence = [];
    startBtnEventListener();
}

//function used to verify whether player selected correct color button after each click. If incorrect, lose screen is displayed and game is reset.
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

//function to add color pressed by player and envoke checkColor function to verify. Also, resets color and shadow box of button initialized on mousedown event or touchstart event
function btnClicked() {
    event.preventDefault();
    resetAnimation();
    removeColorBtnEvent();
    playerSequence.push(this.id);
    checkColor();
}

//function to give visual effect of button being clicked. If color button is click, the color lights up and corresponding sound plays. Also, shadow box styling is applied to give a button pressed down look. when mouse or finger is released, these animations are reset.
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

//reseting animations from above function, clickAnimation.
function resetAnimation() {
    redBtn.classList.remove('btnPressed');
    yellowBtn.classList.remove('btnPressed');
    blueBtn.classList.remove('btnPressed');
    greenBtn.classList.remove('btnPressed');
    startBtn.classList.remove('btnPressed');
    resetColors();
}

//function to display player turn and add event listeners for colored buttons when it is players turn
function playerTurn() {
    turn.innerText = 'Player\'s Turn!';
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

//function to not allow player to press buttons when it is not player's turn
function removeColorBtnEvent() {
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

//resets the color of button when randomSequence is being displayed
function resetColors() {
    redBtn.style.backgroundColor = redColorOriginal;
    yellowBtn.style.backgroundColor = yellowColorOriginal;
    blueBtn.style.backgroundColor = blueColorOriginal;
    greenBtn.style.backgroundColor = greenColorOriginal;
}

//following functions used for illuminating buttons while randomSequence is being displayed
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

//function to begin displaying randomSequence. setTimeouts are used to create proper timing of color lighting up and displaying
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

//adds random color every turn to randomSequence
function addRandomColor() {
    turn.innerText = 'Memorize the sequence!';
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomSequence.push(randomColor);
    score.innerText = `Score: ${randomSequence.length - 1}`
    displaySequence();
    setTimeout(playerTurn, 1000 * randomSequence.length);
}

//kicks off game after player presses Start! button
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
}

//adds event listeners for start button
function startBtnEventListener(){
    //events for mobile phone useage
    startBtn.addEventListener('touchend', startGame);
    startBtn.addEventListener('touchstart', clickAnimation);
    //events for regular device useage
    startBtn.addEventListener('mouseup', startGame);
    startBtn.addEventListener('mousedown', clickAnimation);
}

//envoking these two functions when page is first loaded so the hig score is displayed and the game is ready for the player to press Start! to kick off the game
displayHighScore();

startBtnEventListener();