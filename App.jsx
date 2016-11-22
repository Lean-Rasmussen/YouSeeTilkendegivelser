import React from 'react';
import Footer from "./components/Footer" 
import Header from "./components/Header" 
import ProduktValg from "./components/ProduktValg" 
import Projektvalg from "./components/Projektervalg" 
import Tilmeld from "./components/Tilmeld"


let tilmelding =
   {
      vej:"",
      nummer:'',
      navn: '',
      telefon:'',
      email:'',
      Tvpakke:"",

   }

const resetFrom = function(){
   tilmelding =
   {
      vej:"",
      nummer:'',
      navn: '',
      telefon:'',
      email:'',
      Tvpakke:"",

   }
   console.log(tilmelding)
}



const sendTilmeld = function(){
   resetFrom();
   customerinfo()
   console.log(tilmelding)
};

var App = React.createClass({
   render() {
   	// Data
   	const TVPakker =[{name:'HomeTrio Fiber', Id: 1, pic :"fiber"},
   						 {name :'HomeTrio Fiber extra', Id: 2, pic: "fiberextra"}, 
   						 {name :'HomeTrio Fiber Viasat', Id: 3, pic: "fiberviasat"}, 
   						 {name :'HomeTrio Fiber Total', Id: 4, pic : "fibertotal"}];

	 let fiberProjekter = [
	{
	ProjektNavn : 'Ryttergaarden',
	Vejnavne : ['Maanevej','Orionvej', 'Saturnvej', 'Jupitervaenget'],
	KontaktPerson : 'John Jensen',
	YouSeeProjektLeder : "Thomas Thomsen",
   tilmeldte : []
	},
	{
	ProjektNavn : 'Steenstrup',				
	Vejnavne : ['Holmevej','Toftevaenget', 'Sommervej','Vinterstien'],
	KontaktPerson : 'Olga Johansen',
	YouSeeProjektLeder : "Thomas Thomsen",
   tilmeldte :[]
	},

	]

      return (

         <div>
           	<Header/>
            <form>
               <Projektvalg Projekt ={fiberProjekter} />
               <ProduktValg TVPakker = {TVPakker} />
               <Tilmeld/>
               <button className= 'bestil' onClick = {sendTilmeld} > Tilmeld bestilling</button>
            </form>
            <Footer/>
         </div>

      );
   }
})



export default App;