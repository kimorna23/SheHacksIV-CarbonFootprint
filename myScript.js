var numberOfClicks = 0;
document.getElementById("numberofclicks").innerHTML = numberOfClicks;

function myFunction() {
	document.getElementById("momdog").style.height = "600px";
	document.getElementById("bigger_dogs").style.display = "none";
	document.getElementById("smaller_dogs").style.display = "block";
	numberOfClicks = numberOfClicks + 1;
	document.getElementById("numberofclicks").innerHTML = numberOfClicks;

}

function myFunction2() {
	document.getElementById("momdog").style.height = "300px";
	document.getElementById("bigger_dogs").style.display = "block";
	document.getElementById("smaller_dogs").style.display = "none";
	numberOfClicks = numberOfClicks + 1;
	document.getElementById("numberofclicks").innerHTML = numberOfClicks;

}