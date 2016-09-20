"use strict";
var TilkendegiveseAppModule = angular.module('myApp', []);

TilkendegiveseAppModule.controller('ProjektValgController' ,( function(){
	//active projects should be taken from a list of Json files.
	//roads in a projects should be found from the Json file and added to the options 
	this.fiber = [
	{
	ProjektNavn : 'Ryttergaarden',
	Vejnavne : ['Maanevej','Orionvej', 'Saturnvej', 'Jupitervaenget'],
	KontaktPerson : 'John Jensen',
	YouSeeProjektLeder : "Thomas Thomsen"
	},
	{
	ProjektNavn : 'Steenstrup',				
	Vejnavne : ['Holmevej','Toftevaenget', 'Sommervej','Vinterstien'],
	KontaktPerson : 'Olga Johansen',
	YouSeeProjektLeder : "Thomas Thomsen"
	},
	{
	ProjektNavn : 'Urholm',
	Vejnavne : ['Jensensvej', 'Dirchs alle', 'gulle vaenget', 'Histernevej'],
	KontaktPerson : 'John Johnsen',
	YouSeeProjektLeder : "Per Nielsen"
	}

];
this.valgtProjekt ='stand in name';
console.log(this.fiber);

this.projektNavne = [''];
for (var i = 0; i < this.fiber.length; i++ ){
	this.projektNavne.push(this.fiber[i].ProjektNavn);

}

console.log(this.projektNavne);
this.tilvalg = ['HD pakke', 'Plus', 'TV i flere rum','Cmore'];

	console.log('is this up and firing??');


	}));
//Project is divided into 4 parts, selction project, getting user input and storing user input, getting it as output

// selecting
	//roads should only be visable when a project is chosen
	//show how many have already signed up on that project.
	//name and more information should only be filled in when you have sellected a road

//Getting user input

	//Name and other personal information should be requred before you can press the button (done via HtML requred)
	//require press on link for conditions (done via HtML requred)
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


// Data for use during test

//Fremskudt Dslam
var FremskudtDslam = ['Bornholm','Fyn','Nordjylland'];


//TV Pakker
var TvPakkerFiber = ['FiberTrio','TrioExtra','ViasatPakke','TotalPakke' ];
var TvPakkerKobber = ['LIlle', 'Basis', 'Mellem' , 'Stor'];


