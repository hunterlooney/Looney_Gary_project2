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


//Apply JavaScript: Save Data
//Apply JavaScript: Get Data
//Apply JavaScript: Array Function

//JavaScript: Save Data
/*
Requirements
Use an external .js file
Write a function that saves all data input into the form into Local Storage when the form's submit button is clicked.
This means the values for your input, select, radio or checkboxes etc.
You should also save a key(random number) for your values(array or object). Each saved entry will be a key:value pair.
The key should be a random number which will create a unique id.
The value should be an array or object that contains all the values of your form field data.
This allows for our form to save multiple submissions into Local Storage without overwriting data.
Remember you can test your local storage by using the Web Inspector
*/

//JavaScript: Get Data
/*
Requirements
Once data has been submitted through the form, we can grab the data 
submitted from Local Storage. List out your saved data from Local Storage 
on the additem.html document using the Display Data link you created. 
Make sure you hide the form when you display your data on screen as shown 
in the example screenshots. You can use these the following screenshots as 
a guideline. Your project's screen will vary from this example based on your topic.
*/

//JavaScript: Clear Data (COMPLETED)
/*
Requirements
Create a function that removes all data from local storage.
Be sure to create a clear data link or button in your app that runs the function that removes all data.
*/

//JavaScript: Array Function
/*
Write an array function(s) that populates at least one select form element. This probably will be for your categories but you may have more select fields for other things depending on the topic you chose. This will REPLACE your static HTML select element(s) so that you can see an alterative way to create HTML elements.
Remember:
Be consistent in all your code! Check the rubric before turning in your assignment to make sure you won't miss any points.
Add comments. At minium include the project name, your name, & your term number at the top of EACH of your documents.
All projects must be at least 50% completed to receive a grade.
Do not copy my variable and function names.
*/