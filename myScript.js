var score = 0;
var totalfeedback = "";
const numOfQuestions = 3;
var questionsAnswered = 0;

document.getElementById("score").innerHTML = score;

function hideAll(question){
	document.getElementById(question + "1").style.visibility  = "hidden";
	document.getElementById(question + "2").style.visibility  = "hidden";
	document.getElementById(question + "3").style.visibility  = "hidden";
}

function hideSix(question){
	document.getElementById(question + "1").style.visibility  = "hidden";
	document.getElementById(question + "2").style.visibility  = "hidden";
	document.getElementById(question + "3").style.visibility  = "hidden";
	document.getElementById(question + "4").style.visibility  = "hidden";
	document.getElementById(question + "5").style.visibility  = "hidden";
	document.getElementById(question + "6").style.visibility  = "hidden";
}

function calculate(e, question, emissions, feedback){
	console.log(e.srcElement.id);
	var id = e.srcElement.id;
	score = score + emissions;
	if (question == "2"){		hideSix(question);	}
	hideAll(question);
	document.getElementById(id).style.visibility  = "visible";
	document.getElementById(id).disabled  = true;
	document.getElementById("score").innerHTML = score;
	document.getElementById(question).style.display  = "none";
	document.getElementById((parseInt(question, 10) + 1).toString()).style.display  = "block";
}
