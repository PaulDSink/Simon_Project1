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

Next, I worked on meeting my silver level requirements. This consisted of adding detail to my styling, creating button click animations, adding sound effects, including the player's score and focusing on functionality on different devices. To complete these goals, I used more DOM manipulation and different styling to accomidate different screen sizes. I also used different event listeners so that the game would function identically on a touch screen as it would on a device using a mouse. I initially planned for this portion to take 7-8 hours. I completed it in about 6 hours.

### Gold

Lastly, my gold level was focused on completing the final touches of the game. This included a high score that tracked and displayed the highest score reached, additional game modes, and cleaning up and simplifying code. I did not complete all the goals in my gold level but was able to get some of my ideas into my application. I was unable to create a high score function to track all players' scores and display the highest one, but I was able to learn how to use localStorage in order to track a specific user's highest score on an individual system. Even when the page is reloaded, the player can see their top score. I was also able to organize and make comments to my code to help anyone contributing or reading my code to help explain how functions work and what each snippet of code is accomplishing. I initially assumed this portion would take about 10 hours to complete. I spent about 6 hours on the things I was able to accomplish.

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