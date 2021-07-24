'use strict';
/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = 
'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
*/

// state variabels 
let score = 20;
//number to comapre guesses 
//get a random number 
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener
('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
//when there is no input  
  if(!guess){
    document.querySelector('.message').textContent = 
    '⛔ No Number!';
    //When player wins 
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent = 
    '🎉 Correct Number!';
    
    document.querySelector('.number').textContent = 
    secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width =
    '30rem';

    //when guess is too high
  } else if (guess > secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 
        '📈 Too high!';  
        score--;
        document.querySelector('.score').textContent = 
        score;
    } else {
        document.querySelector('.message').textContent = 
        '💥 You lost the game!'; 
        document.querySelector('.score').textContent = 
        0; 
    }
    
    //when guess is too high
  } else if (guess < secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 
        '📈 Too high!';  
        score--;
        document.querySelector('.score').textContent = 
        score;
    } else {
        document.querySelector('.message').textContent = 
        '💥 You lost the game!'; 
        document.querySelector('.score').textContent = 
        0; 
    }  
  } 
});