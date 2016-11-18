import React from 'react';
import Footer from "./components/Footer" 
import Header from "./components/Header" 
import ProduktValg from "./components/ProduktValg" 
import Projektvalg from "./components/Projektervalg" 
import Tilmeld from "./components/Tilmeld"



class App extends React.Component {
   render() {
   	// Data
   	const TVPakker =[{name:'HomeTrio Fiber', Id: 1, pic :"fiber"},
   						 {name :'HomeTrio Fiber extra', Id: 2, pic: "fiberextra"}, 
   						 {name :'HomeTrio Fiber Viasat', Id: 3, pic: "fiberviasat"}, 
   						 {name :'HomeTrio Fiber Total', Id: 4, pic : "fibertotal"}];

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

	]


      return (

         <div>
           	<Header/>
            <Projektvalg Projekt ={fiberProjekter}/>
            <ProduktValg TVPakker = {TVPakker}/>
            <Tilmeld/>
            <Footer/>
         </div>
      );
   }
}



export default App;