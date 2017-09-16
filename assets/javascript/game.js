// Do not execute script until the page is loaded.
$(document).ready(function() {

	//_VARIABLES__________________________________________________

	// Generate a random number between 19 and 120 as the computer generated number.
	var computerNumber = Math.floor(Math.random()* 101) + 19;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	// Generate a random value between 1 and 12 to be used for each crystal.
	var randomCrystalValue = Math.floor(Math.random()* 12) + 1;
	// Initialize an array of random values for the crystals.
	var crystalValueArray = [];

	//_FUNCTIONS__________________________________________________

	function setupCrystalValues() {
		// For loop that stores random values into crystal value array.
		for (var i = 0; i < 4; i++) {
			// Push random values into array.
			randomCrystalValue = Math.floor(Math.random()* 12) + 1;
			crystalValueArray.push(randomCrystalValue);
		}

		// Take values from crystal value array and use them as an attribute on each crystal image.
		for (var i = 1; i <= 4; i++) {
			$('#crystal-' + [i]).attr("value", crystalValueArray[i - 1]);
		}
	}

	function resetGame() {
		// Reset computer number and insert the text.
		computerNumber = Math.floor(Math.random()* 101) + 19;
		$('#random-number').text(computerNumber);

		// Reset crystal value array.
		crystalValueArray = [];

		setupCrystalValues();

		// Reset the total score and insert the text.
		totalScore = 0;
		$('#total-score').text(totalScore);
	}


	//_MAIN_PROCESS_______________________________________________

	// Place numbers into empty divs to be updated dynamically.
	$('#random-number').text(computerNumber);
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#total-score').text(totalScore);

	setupCrystalValues();

	$(".crystals").on("click", function() {
		// Extract each crystal value from the "value" attribute and store in a variable.
		var crystalValue = $(this).attr("value");

		// Turn the string received from "value" into an integer.
		crystalValue = parseInt(crystalValue);

		// On each click, add the value of the crystal clicked to the user's total score.
		totalScore += crystalValue;

		// Update the score on the page.
		$('#total-score').text(totalScore);

		if (totalScore === computerNumber) {
			// Add to the wins total, insert the text, and alert win.
			wins++;
			$('#wins').text(wins);
			alert('You win!');

			// Reset Game.
			resetGame();
		}

		else if (totalScore > computerNumber) {
			// Add to the losses total, insert the text, and alert win.
			losses++;
			$('#losses').text(losses);
			alert('You lose.');

			// Reset Game.
			resetGame();
		}

	});

});