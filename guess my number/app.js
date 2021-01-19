'use strict'

const player1 = document.getElementById(`player1`);
const dice = document.querySelector(".dice");
const leftPlayerName = document.getElementById("left__player__name");
const rightPlayerName = document.getElementById("right__player__name");
/*
let name1 = prompt("Enter Name For Left Player ");
let name2 = prompt("Enter Name For Right Player ");

leftPlayerName.innerHTML = "Player 1 " + name1;
rightPlayerName.innerHTML ="Player 2 " + name2;*/

let number = 0;
let currentNumber = 0;
let player1Score = 0;
let player2Score = 0;
let activePlayer = 0;
let score = [0,0];
let gameStatus = true;

// new game start 
function init(){
    number = 0;
    currentNumber = 0;
    player1Score = 0;
    player2Score = 0;
    activePlayer = 0;
    score = [0,0];
    gameStatus = true;

    document.getElementById(`total__score__${0}`).innerHTML = currentNumber;
    document.getElementById(`total__score__${1}`).innerHTML = currentNumber;
    document.getElementById(`player__${0}`).innerHTML = currentNumber;  
    document.getElementById(`player__${1}`).innerHTML = currentNumber;
    document.querySelector(`.player__${0}`).classList.remove("winner__player");
    document.querySelector(`.player__${1}`).classList.remove("winner__player");

}
function switchingPlayer(){
    document.getElementById(`total__score__${activePlayer}`).innerHTML = currentNumber;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentNumber = 0;
}

function diceRolling () {
    
    if(gameStatus){

        number = Math.trunc(Math.random()*6) + 1;
        currentNumber += number;
        dice.src=`dice-${number}.png`;

        if(number !== 1){
            //update score of current player
            document.getElementById(`player__${activePlayer}`).innerHTML = currentNumber;  
        }
        else{   
            // switching to next player 
            switchingPlayer();
        }
    }
    
}

function holdPlayer () {

    if(gameStatus){
        score[activePlayer] += currentNumber;
        
        document.getElementById(`total__score__${activePlayer}`).innerHTML = score[activePlayer];

        if(score[activePlayer] >= 20){
            document.querySelector(`.player__${activePlayer}`).classList.add("winner__player");
            gameStatus = false;
        }
        switchingPlayer();
    }
       
}