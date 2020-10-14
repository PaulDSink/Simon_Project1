# Simon_Project1

## Description
This application is an interactive game of Simon. The game displays a randomly generated sequence of colors and the player needs to memorize that sequence and return it back in the correct order to continue. The first round begins with only one color, and after each round, one random color is added onto the sequence. 

## Approach

I broke down my approach into three levels: bronze(MVP), silver, and gold. Bronze is my minimum viable product(MVP) and the highest priority of tasks to be completed. Silver would be the things next in line to work on after completing MVP. Lastly, gold consists of all the final things that I want to add to my application. This would be the icing on the cake.

### Bronze

Bronze level is my MVP. The goal for bronze was to create a functioning Simon game that the player can play without any major bugs or issues. This included first creating my gameboard using HTML5 and CSS3 while following my wireframe concept. I used minimal styling so that I could spend more time working on game functionality first, and then improving my styling later. After this was accomplished, I used JavaScript to create my game's main functionality. The approach I took to accomplish this was first working on the computer generated sequence and then working on the player turn to return that sequence.  
First, I used various functions to add a random color into an array for the game sequence after each turn. I then used DOM manipulation and setTimeouts to properly display the sequence to the player.  
Once I had the sequence generating and displaying properly, I worked on the player's turn functionality. I used DOM manipulation and various functions to generate an array for the player's sequence and varify that the two arrays matched after each button press. I then emptied the play array and began the cycle again.  
After completing my bronze level, I deployed my site using netlify.
I initially estimated this portion of the project to take me approximately 18 hours to complete. I was able to complete this portion in about 10-12 hours.

### Silver

Next, I worked on meeting my silver level requirements. This consisted of

My second outome, silver, will be focused on improving the styling of the project. This will be important so that it feels like a real Simon game. I will focus on giving the game a more realistic look using "illuminating" buttons, sounds effects, click animation, and more! Because I am only editing what is already in place, this will take much less time. I estimate this portion to take 7-8 hours to complete.

### Gold

Lastly, my gold outcome will be focused on perfecting the game. I will focus on additional interactivity such as an all time highscore tracker that keeps track even when the page is reloaded and potentially additional game modes. This portion would be an additional 10 hours to complete.

### Wireframe

![Wireframe Picture](Wireframe.png)

## Example

### Gameplay

![Gameplay Gif](SimonGamePlay.gif)
The gameplay for Simon is simple. The game displays a sequence of random colors, starting with only one color. The player then needs to press the buttons in that sequence correctly. After each round that the player correctly returns the sequence, one new color will be added. See above gif.

### Player Loss

![Loss Gif](SimonGamePlayLose.gif)
In the event the player does not successfully return the correct sequence, an alert will pop up indicating where the player went wrong. The player can then press the start button to begin a new game. See above gif.

## Features

I used the following technologies on this project:

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Local Storage

## Installation

This Simon game has been deployed and can be accessed to play by visiting https://condescending-banach-2b7ada.netlify.app/ with any web browser.

To set up this application locally:

1. Fork and clone [this repository](https://github.com/PaulDSink/Simon_Project1) onto your local system.
2. Open index.html using your default browser or simply cd into the newly cloned repository using terminal and
>open index.html

## Contribution

Source code: [click here](git@github.com:PaulDSink/Simon_Project1.git)  
Issue reporting: [click here](git@github.com:PaulDSink/Simon_Project1.git/issues)