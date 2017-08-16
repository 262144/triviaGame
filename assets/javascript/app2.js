//Add the on load up function

//Variables
var answersCorrect = 0;
var answersIncorrect = 0;
var questionCount = 0;
var time;
var time3;
var questions = ["Who was the only President to serve more than two terms?", "Theodore Roosevelt", "Franklin D. Roosevelt", "George Washington", "Ulysses S. Grant", "2", "Who was the oldest elected President?", "Dwight D. Eisenhower", "James Buchanan", "Donald Trump", "Ronald Reagan", "3", "Who was the first President to live in the White House?", "Thomas Jefferson", "John Adams", "George Washington", "Andrew Jackson", "2", "Who was the first President to appear on TV?", "Dwight D. Eisenhower", "Harry S. Truman", "Franklin D. Roosevelt", "John F. Kennedy", "3", "Who was the only unanimously elected President by the Electoral College?", "George Washington", "Franklin D. Roosevelt", "John F. Kennedy", "Ronald Reagan", "1"];
var correctAnswers = [" ", "Franklin D. Roosevelt served as President for over 12 years, the longest time in office.", "Donald Trump was the oldest elected President.  He was 70 years and 7 months old when inaugurated on January 20, 2017.", "On Saturday, November 1, 1800, John Adams became the first president to take residence in the White House.", "The first President to appear on black and white television was Franklin D. Roosevelt on April 30, 1939 at the opening ceremonies for the World's Fair.", "George Washington was the only president to have received 100% of the electoral votes.  He was unanimously elected by the Electoral College in 1789, and again in 1792."]


//Functions

		function placeQuestion() {
			$("#question").text(questions[0]);
			$("#1").text(questions[1]);
			$("#2").text(questions[2]);
			$("#3").text(questions[3]);
			$("#4").text(questions[4]);
			questionCount++;
			$(".questionRow").show();
			console.log("the placeQuestion function was called")
		}

		function hideTimer() {
			$("#timer").hide();
		}

		function startTimer (){
			$("#start").hide();
			$("#timer").show();
			time = 10;
			$("#timerCount").html(time);
			counter = setInterval(timerCount, 1000);
			console.log("The starTimer function was called and time = " + time);
		}

		function timerCount () {
			time--;
			$("#timerCount").html(time);
			if (time == 0) {
				noResponse();
			}
		}

		function clearQuestion() {
			$("#question, .answer").empty();
			$(".questionRow").hide();
		}
	
		function deleteQuestion() {
			questions.splice(0, 6);
			console.log("questions = " + questions);
		}

		function clearResponse() {
			$("#correctIncorrect, #allDone, #numberCorrect, #numberIncorrect, #numberUnanswered").empty();
				console.log("the clearResponse function was called");
		}

		function incorrectResponse() {
			answersIncorrect++;
			$("#correctIncorrect").text("NOPE! " + correctAnswers[questionCount]);
				checkForEnd();
		}
			
		function correctResponse () {
			answersCorrect++;
			$("#correctIncorrect").text("THAT'S RIGHT! " + correctAnswers[questionCount]);
				checkForEnd();
		}

		function noResponse () {
			//Stop timer
			clearQuestion();
			hideTimer();
			clearInterval(counter);
			//Display the answer
			console.log("The noResponse function ran and the correct answer is " + correctAnswers[questionCount]);
			console.log("question count is " + questionCount)
			$("#correctIncorrect").text("TIME'S UP! " + correctAnswers[questionCount]);
			checkForEnd();
			//Begin the threeSeconds function
		}

		function checkForEnd () {
			if (questionCount < 5) {
			//The three-second timer function is called here
			// $("#allDone").text("Click to simulate the three second timer.");
			time3 = 3;
			// console.log("checkForEnd was called and time = " time);
			$("#allDone").html(time3);
			counter2 = setInterval(threeSeconds, 1000);
			} else {
			//The end of game function is called here
			endOfGame();
			}
		}

		function threeSeconds () {
			time3--;
			$("#allDone").html(time3);
			if (time3 == 0) {
				clearInterval(counter2);
				clearResponse();
				deleteQuestion();
				placeQuestion();
				startTimer();
			}
		}

		function endOfGame() {
			console.log("That's the end of the game")
			$("#start").html("<h2>Start Over?<h2>");
			$("#start").show();
			$("#allDone").text("All done. Here are the results:");
			//Give a closing message
			$("#numberCorrect").text("Correct answers: " + answersCorrect);
			$("#numberIncorrect").text("Incorrect answers: " + answersIncorrect);
			$("#numberUnanswered").text("Unanswered: " + (5 - answersIncorrect - answersCorrect));
		}

		function reset() {
			//reset the variables
			console.log("the reset function was called")
			answersCorrect = 0;
			answersIncorrect = 0;
			questionCount = 0;

			questions = ["Who was the only President to serve more than two terms?", "Theodore Roosevelt", "Franklin D. Roosevelt", "George Washington", "Ulysses S. Grant", "2", "Who was the oldest elected President?", "Dwight D. Eisenhower", "James Buchanan", "Donald Trump", "Ronald Reagan", "3", "Who was the first President to live in the White House?", "Thomas Jefferson", "John Adams", "George Washington", "Andrew Jackson", "2", "Who was the first President to appear on TV?", "Dwight D. Eisenhower", "Harry S. Truman", "Franklin D. Roosevelt", "John F. Kennedy", "3", "Who was the only unanimously elected President by the Electoral College?", "George Washington", "Franklin D. Roosevelt", "John F. Kennedy", "Ronald Reagan", "1"];
		}

//GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_
//Show the title & start button.  Timer is hidden.
	hideTimer();

//START/RESTART BUTTON: On click, hide start button & load first question
$("#start").on("click", function() {
	//reset the game if clicked as a restart
	reset();
	clearResponse();
	$("#correctIncorrect, #allDone, #numberCorrect", "#numberIncorrect", "#numberUnanswered").empty();
	console.log("the clearRespone function is here")
	//place question
	placeQuestion();
	//TO DO: start timer and call timer function
	startTimer();
})

//ANSWER CLICK...
$(".answer").on("click", function() {
	//Clear out the question div
	clearQuestion();
	hideTimer();
	console.log ("the id is " + this.id)
	if (this.id != questions[5]) {
		incorrectResponse();
	} else {
		correctResponse();
	}
});//end of #answer click event


	//After 3 seconds, clear out responseRow and load the next question
$("#allDone").on("click", function() {
		clearResponse();
		deleteQuestion();
		placeQuestion();
		startTimer();
});//end of three seconds temporary click event


