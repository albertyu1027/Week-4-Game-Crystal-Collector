// The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
// Here's how the app works:
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
 
$(document).ready(function(){

var goal= Math.floor(Math.random() * 120 + 19);
var wins= 0
var losses= 0
var totalScore= 0
var crystal= Math.floor(Math.random()*12+1)
var ruby= Math.floor(Math.random()*12+1)
var green= Math.floor(Math.random()*12+1)
var yellow= Math.floor(Math.random()*12+1)

$("#computerScore").append(goal);
$("#wins").append(wins);
$("#losses").append(losses);
console.log(goal);

function WIN(){
		alert("You won");
 		wins++; 
  		$("#wins").text("Wins: " + wins);
  		RESTART();
}

function LOSS(){
		alert ("You lost");
  		losses++;
  		$('#losses').text("Losses: " + losses);
  		RESTART();
}

function RESTART(){
      goal=Math.floor(Math.random()*101+19);
      console.log(goal)
      $("#computerScore").text(goal);
      totalScore= 0;
      $("#total").text(totalScore);
      crystal= Math.floor(Math.random()*11+1);
      ruby= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      yellow= Math.floor(Math.random()*11+1);
} 


$("#diamond1").on ("click", function(){
    totalScore = totalScore + crystal;
    console.log("USER GUESS = " + totalScore);
    $("#total").text(totalScore); 
          //sets win/lose conditions
        if (totalScore == goal){
          WIN();
        }
        else if ( totalScore > goal){
          LOSS();
        }   
 })  

$("#diamond2").on ("click", function(){
    totalScore = totalScore + ruby;
    console.log("USER GUESS = " + totalScore);
    $("#total").text(totalScore); 
          //sets win/lose conditions
        if (totalScore == goal){
          WIN();
        }
        else if ( totalScore > goal){
          LOSS();
        }   
  })  

$("#diamond3").on ("click", function(){
    totalScore = totalScore + green;
    console.log("USER GUESS = " + totalScore);
    $("#total").text(totalScore); 
          //sets win/lose conditions
        if (totalScore == goal){
          WIN();
        }
        else if ( totalScore > goal){
          LOSS();
        }   
  })  

$("#diamond4").on ("click", function(){
    totalScore = totalScore + yellow;
    console.log("USER GUESS = " + totalScore);
    $("#total").text(totalScore); 
          //sets win/lose conditions
        if (totalScore == goal){
          WIN();
        }
        else if ( totalScore > goal){
          LOSS();
        }   
  })  
});

// 	crystal = $("#diamond1").on("click", (function(event) 
// 	{counter += 3;
// 		$("#total").html(counter);
// 		console.log(counter);
// }));
// 	ruby = $("#diamond2").on("click", (function(event) 
// 	{counter += 4;
// 		$("#total").html(counter);
// 		console.log(counter);
// }));
// 	green = $("#diamond3").on("click", (function(event) 
// 	{counter += 5;
// 		$("#total").html(counter);
// 		console.log(counter);
// }));
// 	yellow = $("#diamond4").on("click", (function(event) 
// 	{counter += 6;
// 		$("#total").html(counter);
// 		console.log(counter);
// }));


