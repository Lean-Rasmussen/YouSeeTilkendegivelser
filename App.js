"use strict";
var TilkendegiveseAppModule = angular.module('myApp', []);

TilkendegiveseAppModule.controller('MainController', ('%scope', function($scope){

	console.log('is this up and firing??');

}));
//Project is divided into 4 parts, selction project, getting user input and storing user input, getting it as output

// selecting
	//active projects should be taken from a list of Json files.
	//roads should only be visable when a project is chosen
	//show how many have already signed up on that project.
	//roads in a projects should be found from the Json file and added to the options 
	//name and more information should only be filled in when you have sellected a road

//Getting user input

	//Name and other personal information should be requred before you can press the button
	//require press on link for conditions
	//requre checkbox is checked.
	//saving the user input

// Storing user input.
	// check if there is alrady and adress with the number
	//storing the information.

//Getting the information from the form out in an excel like manner.


//maybe Json file maker for manuel input from sales.
		//take name of projects
		//take input for road names
		//edit in road names
		//output a json file which can be plugged into the list for the program