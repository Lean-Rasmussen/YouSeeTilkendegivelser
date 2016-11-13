import React from 'react';
import Footer from "./components/Footer" 
import Header from "./components/Header" 
import PersonInfo from "./components/Personinfo" 
import ProduktValg from "./components/ProduktValg" 
import Projektvalg from "./components/Projektervalg" 
//import Tilmeld from "./component/Tilmeld"<Tilmeld/>


class App extends React.Component {
   render() {
   	// Data
   	const TVPakker =[{name:'HomeTrio Fiber', Id: 1, pic :"billede11"},
   						 {name :'HomeTrio Fiber extra', Id: 2, pic: "billede22"}, 
   						 {name :'HomeTrio Fiber Viasat', Id: 3, pic: "billede33"}, 
   						 {name :'HomeTrio Fiber Total', Id: 4, pic : "billede44"}];

	 const fiberProjekter = [
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
	}]


      return (
         <div>
         	<Header/>
            <Projektvalg Projekt ={fiberProjekter}/>
            <PersonInfo/>
            <ProduktValg TVPakker = {TVPakker}/>
            
            <Footer/>
         </div>
      );
   }
}



export default App;