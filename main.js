//Gary W. Hunter Looney
//Project 2
//Add Character Java
//Term 1304

// Get Element by ID Variables
var cname = document.getElementById("cname");
var sex = document.getElementById("sex");
var birthdate = document.getElementById("birthdate");
var race = document.getElementById("race");
var height = document.getElementById("height");
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var glasses = document.getElementById("glasses");
var glassesValue = function () {
	if(glasses.checked) {
		glassesValue = "Yes";
	} else { 
		glassesValue = "No";
	}
};
var saveData = function () {
	var id = Math.floor(Math.random()*10000001);
	var item = {};
		item.name = ["Name: ", cname.value];
		item.glasses = ["Glasses: ", glassesValue.value];
		item.sex = ["Sex: ", sex.value];
		item.birthdate = ["Birthdate: ", birthdate.value];
		item.race = ["Race: ", race.value];
		item.height = ["Height: ", height.value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Character Added!");
};
var clearData = function () {
	localStorage.clear();
	alert("Data Cleared!");

};
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

clearButton.addEventListener("click", clearData);
displayButton.addEventListener("click", getTheData);
submitButton.addEventListener("click", saveData);