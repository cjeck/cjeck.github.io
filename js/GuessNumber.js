var randomNumber = Math.floor(Math.random() * 100) + 1;

var guessBox = document.querySelector('.guessBox');
var guessButton = document.querySelector('.guessButton');

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');

var numGuess = 1;
var startOver;
var exit;
var space;

guessBox.focus();

function checkNum(){
	var guessNum = Number(guessBox.value);
	if(numGuess === 1){
		guesses.textContent = 'Incorrect Guesses: ';
	}
	guesses.textContent += guessNum + ' ';

	if(numGuess === 10){
		guesses.textContent = 'GAME OVER!';
		lowOrHigh.textContent = '';
		gameOver();
	}
	else if(isNaN(guessNum)){
		alert('That is not a number!');
		setTimeout(function(){guessBox.focus();}, 1);
	}
	else if(guessNum > 100){
		alert('Please guess the number between 1 to 100 only!');
		setTimeout(function(){guessBox.focus();}, 1);
	}
	else if(guessNum < 1){
		alert('Please guess the number between 1 to 100 only!');
		setTimeout(function(){guessBox.focus();}, 1);
	}
	else if(guessNum - 5 > randomNumber){
		lowOrHigh.textContent = 'Your guess is too high!';
	}
	else if(guessNum > randomNumber){
		lowOrHigh.textContent = 'Just a little bit lower!';
	}
	else if(guessNum + 5 < randomNumber){
		lowOrHigh.textContent = 'Your guess is too low!';
	}
	else if(guessNum < randomNumber){
		lowOrHigh.textContent = 'Just a little bit higher!';
	}

	else if(guessNum === randomNumber){
		lastResult.textContent = "Congratulations! You've guessed it right!";
		lowOrHigh.textContent = '';
		guesses.textContent = 'Do you wish to play Again?';
		guessBox.disabled = true;
		guessButton.disabled = true;
		startOver = document.createElement('button');
		startOver.textContent = 'Yes';
		document.getElementById("resultParagraphs").appendChild(startOver);
		startOver.addEventListener('click',restartGame);
		
		space = document.createElement('p')
		space.textContent = '  ';
		document.getElementById("resultParagraphs").appendChild(space);

		exit = document.createElement('button');
		exit.textContent = 'No';
		document.getElementById("resultParagraphs").appendChild(exit);
		exit.addEventListener('click',over);
	}

	guessBox.value = '';
	guessBox.focus();
	numGuess++;
}

guessButton.addEventListener('click',checkNum);

function gameOver(){
	guessBox.disabled = true;
	guessButton.disabled = true;
	startOver = document.createElement('button');
	startOver.textContent = 'Start Over';
	document.getElementById("resultParagraphs").appendChild(startOver);
	startOver.addEventListener('click',restartGame);

	space = document.createElement('p')
	space.textContent = '  ';
	document.getElementById("resultParagraphs").appendChild(space);

	exit = document.createElement('button');
	exit.textContent = 'Exit';
	document.getElementById("resultParagraphs").appendChild(exit);	
	exit.addEventListener('click',over);
}

function restartGame(){
	guessBox.disabled = false;
	guessButton.disabled = false;

	var resetParas = document.querySelectorAll('.resultParagraphs p');
	for (var i = 0 ; i < resetParas.length ; i++) {
  	resetParas[i].textContent = '';
  	}
	
	startOver.parentNode.removeChild(startOver);
	exit.parentNode.removeChild(exit);
	space.parentNode.removeChild(space);
	numGuess = 1;
	guessBox.value = '';
  	guessBox.focus();

  	randomNumber = Math.floor(Math.random() * 100) + 1;
  	guessButton.addEventListener('click',checkNum);
}

function over(){
	history.back()
	// guessBox.disabled = true;
	// guessButton.disabled = true;
	// startOver.parentNode.removeChild(startOver);
	// exit.parentNode.removeChild(exit);
	// space.parentNode.removeChild(space);
	// guessBox.value = '';
	// var resetParas = document.querySelectorAll('.resultParagraphs p');
	// for (var i = 0 ; i < resetParas.length ; i++) {
 //  	resetParas[i].textContent = '';
	// }
}
