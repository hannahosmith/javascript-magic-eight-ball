$(document).ready(function(){

var magicEightBall = {};
$("#answer").hide();
magicEightBall.responses = ["It is decidedly so.", "Better not tell you now.", "Very doubtful."];
magicEightBall.getAnswer = function(question) {
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	var randomIndex = Math.floor((Math.random() * this.responses.length));
	var answer = this.responses[randomIndex];
	console.log(question);
	console.log(answer);
	$("#answer").text(answer);
	$("#answer").fadeIn(4000);
};

var askQuestion = function() {
$("#answer").hide();		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout (
		function () {
	var question = prompt("Go on, ask me something!");
	$("#8ball").effect("shake");
	magicEightBall.getAnswer(question);
},500);
};

$("#questionButton").click(askQuestion);

/*magicEightBall.answerMe("do you luv me??");*/

});
