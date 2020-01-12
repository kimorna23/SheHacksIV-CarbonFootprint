var score = 0;
const numOfQuestions = 3;
var questionsAnswered = 0;
document.getElementById("score").innerHTML = score;

function hideAll(question){
	document.getElementById(question + "1").style.visibility  = "hidden";
	document.getElementById(question + "2").style.visibility  = "hidden";
	document.getElementById(question + "3").style.visibility  = "hidden";
	questionsAnswered += 1;
}

function low(e, question) {
	console.log(e.srcElement.id);
	var id = e.srcElement.id;
	score = score + 1;
	hideAll(question);
	document.getElementById(id).style.visibility  = "visible";
	document.getElementById(id).disabled  = true;
	document.getElementById("score").innerHTML = score;
}

function high(e, question) {
	var id = e.srcElement.id;
	score = score + 10;
	hideAll(question);
	document.getElementById(id).style.visibility  = "visible";
	document.getElementById(id).disabled  = true;
	document.getElementById("score").innerHTML = score;
}

function mid(e, question) {
	score = score + 5;
	var id = e.srcElement.id;
	hideAll(question);
	document.getElementById(id).style.visibility  = "visible";
	document.getElementById(id).disabled  = true;
	document.getElementById("score").innerHTML = score;
}
