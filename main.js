
// Get Element by ID Variables
var cname = document.getElementById("cname");
var glasses = document.getElementById("glasses");
var sex = document.getElementById("sex");
var birthdate = document.getElementById("birthdate");
var race = document.getElementById("race");
var height = document.getElementById("height");

var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");


//Submit Button and Get Data 
var getData = function () {
	localStorage.setItem("Name", cname.value);
	localStorage.setItem("Glasses", glasses.value);
	localStorage.setItem("Sex", sex.value);
	localStorage.setItem("Birthdate", birthdate.value);
	localStorage.setItem("Race", race.value);
	localStorage.setItem("Height", height.value);
};
submitButton.addEventListener("click", getData);

//Clear Button
var clearData = function () {
	localStorage.clear();
};
clearButton.addEventListener("click", clearData);



