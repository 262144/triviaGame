$(document).ready(function() {

//Variables
var answersCorrect;
var answersIncorrect;
var questionCount;
var time;
var interval;
var questions = ["Who was the only President to serve more than two terms?", "Theodore Roosevelt", "Franklin D. Roosevelt", "George Washington", "Ulysses S. Grant", "2", "Who was the first President to win the Nobel Peace Prize?", "Barack Obama", "Woodrow Wilson", "Theodore Roosevelt", "Jimmy Carter", "3", "Who was the first President to live in the White House?", "Thomas Jefferson", "John Adams", "George Washington", "Andrew Jackson", "2", "Who was the first President to appear on TV?", "Dwight D. Eisenhower", "Harry S. Truman", "Franklin D. Roosevelt", "John F. Kennedy", "3", "Who was the only unanimously elected President by the Electoral College?", "George Washington", "Franklin D. Roosevelt", "John F. Kennedy", "Ronald Reagan", "1"];
var correctAnswers = [" ", "Franklin D. Roosevelt served as President for over 12 years, the longest time in office.", "Theodore Roosevelt was the first President to win the Nobel Peace Prize in 1906. He received the Peace Prize for having negotiated peace in the Russo-Japanese war in 1904-5.", "On Saturday, November 1, 1800, John Adams became the first president to take residence in the White House.", "The first President to appear on black and white television was Franklin D. Roosevelt on April 30, 1939 at the opening ceremonies for the World's Fair.", "George Washington was the only president to have received 100% of the electoral votes.  He was unanimously elected by the Electoral College in 1789, and again in 1792."]
var presidents = [" ", "assets/images/fRoosevelt.png", "assets/images/tRoosevelt.jpg", "assets/images/Adams.jpg", "assets/images/fRoosevelt.png", "assets/images/Washington.jpg"]


//FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS_FUNCTIONS
function hideTimer() {
	$("#timer").hide();
}	


function hideWell() {
	$(".well").hide();
}


function startTimer (){
	console.log("start Timer was called")
	$("#start").hide();
	$("#timer").show();
	time = 10;
	$("#timerCount").html(time);
	counter = setInterval(timer, 1000);
}


function timer () {
	time--;
	$("#timerCount").html(time);
	if (time == 0) {
		clearInterval();
		noResponse();
	}
}


function placeQuestion() {
	questionCount++;
	var index = 6*questionCount
	$("#question").text(questions[index-6]);
	$("#1").text(questions[index-5]);
	$("#2").text(questions[index-4]);
	$("#3").text(questions[index-3]);
	$("#4").text(questions[index-2]);
	$(".questionRow").show();
}


function clearQuestion() {
	$("#question, .answer").empty();
	$(".questionRow").hide();
}


function incorrectResponse() {
	answersIncorrect++;
	$("#correctIncorrect").text("NOPE! " + correctAnswers[questionCount]);
	$("#president").attr("src", presidents[questionCount]);
	checkForEnd();
}


function correctResponse () {
	answersCorrect++;
	$("#correctIncorrect").text("THAT'S RIGHT! " + correctAnswers[questionCount]);
	$("#president").attr("src", presidents[questionCount]);
	checkForEnd();
}


function noResponse () {
	clearQuestion();
	hideTimer();
	clearInterval(counter);
	console.log("The noResponse function ran and the correct answer is " + correctAnswers[questionCount]);
	console.log("question count is " + questionCount)
	$("#correctIncorrect").text("TIME'S UP! " + correctAnswers[questionCount]);
	$("#president").attr("src", presidents[questionCount]);
	checkForEnd();
}


function checkForEnd () {
	if (questionCount < 5) {
		interval = 3;
		$("#interval").html(interval);
		counter = setInterval(threeSeconds, 1000);
	} else {
		endOfGame();
	}
}


function threeSeconds () {
	interval--;
	$("#interval").html(interval);
	if (interval == 0) {
		clearInterval(counter);
		clearResponse();
		placeQuestion();
		startTimer();
	}
}


function clearResponse() {
	$("#correctIncorrect, #interval, #numberCorrect, #numberIncorrect, #numberUnanswered").empty();
	console.log("the clearResponse function was called");
	hideWell();
	$("#president").attr("src", "");
}


function endOfGame() {
	console.log("endOfGame function has been called")
	$("#start").html("<h2>Start Over?<h2>");
	$("#start").show();
	$("#interval").text("All done. Here are the results:");
	$("#numberCorrect").text("Correct answers: " + answersCorrect);
	$("#numberIncorrect").text("Incorrect answers: " + answersIncorrect);
	$("#numberUnanswered").text("Unanswered: " + (5 - answersIncorrect - answersCorrect));
	$(".well").show();
}


function reset() {
	answersCorrect = 0;
	answersIncorrect = 0;
	questionCount = 0;
	$("#correctIncorrect, #interval, #numberCorrect, #numberIncorrect, #numberUnanswered").empty();
	hideWell();
	$("#president").attr("src", "");
}


//GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME_GAME
hideTimer();
hideWell();


//CLICK ON START_CLICK ON START_CLICK ON START
$("#start").on("click", function() {
	//reset the game if clicked as a restart
	reset();
	startTimer();
	placeQuestion();
})

//CLICK AN ANSWER_CLICK AN ANSWER_CLICK AN ANSWER
$(".answer").on("click", function() {
	//Clear out the question div
	clearInterval(counter);
	hideTimer();
	clearQuestion();
	var index = 6*questionCount;
	if (this.id != questions[index - 1]) {
		incorrectResponse();
	} else {
		correctResponse();
	}
});//end of #answer click event




}); //END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END_END

