//Gary W. Hunter Looney
//Project 2
//Add Character Java
//Term 1304

// Get Element by ID Variables
var cname = document.getElementById("cname");
var glasses = document.getElementById("glasses");
var sex = document.getElementById("sex");
var birthdate = document.getElementById("birthdate");
var race = document.getElementById("race");
var height = document.getElementById("height");
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var getSelectedGlasses = function () {
	if(glasses.checked) {
		value = "Yes";
	} else {
		value = "No"
	}
	return value;
};

//Submit Button and Get Data 
/*
var getData = function () {
	getSelectedGlasses();
	localStorage.setItem("Name", cname.value);
	localStorage.setItem("Glasses", value);
	localStorage.setItem("Sex", sex.value);
	localStorage.setItem("Birthdate", birthdate.value);
	localStorage.setItem("Race", race.value);
	localStorage.setItem("Height", height.value);
};
submitButton.addEventListener("click", getData);
*/

function saveData () {
	var id = Math.floor(Math.random()*10000001);
	var item = {};
		item.name = ["Name: ", cname.value];
		item.glasses = ["Glasses: ", getSelectedGlasses];
		item.sex = ["Sex: ", sex.value];
		item.birthdate = ["Birthdate: ", birthdate.value];
		item.race = ["Race: ", race.value];
		item.height = ["Height: ", height.value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Character Added!");
};
submitButton.addEventListener("click", saveData);

//Clear Button
var clearData = function () {
	localStorage.clear();
	alert("Data Cleared!");

};
clearButton.addEventListener("click", clearData);


var getTheData = function () {
	var makeDivision = document.createElement('div');
		makeDivision.setAttribute("id", "items");
	var makeTheList = document.createElement('ul');
		makeDivision.appendChild(makeTheList);
		document.body.appendChild(makeDivision);
	for ( var i = 0, len = localStorage.length; i < len; i++) {
		var makeli = document.createElement('li');
			makeTheList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSecondList = document.createElement('ul');
			makeli.appendChild(makeSecondList);
		for (var n in obj) {
			var makeSecondli = document.createElement('li');
				makeSecondList.appendChild(makeSecondli);
			var optSecondText = obj[n][0] + " "	+ obj[n][1];
				makeSecondli.innerHTML = optSecondText;
		}
	}
};

var displayButton = document.getElementById('displayButton');
displayButton.addEventListener("click", getTheData);