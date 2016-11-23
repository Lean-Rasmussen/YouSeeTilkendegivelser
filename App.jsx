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
   const kanaler = ["dr1",'dr2','dr3','ramasjag', 'drk', 'drultra', 'tv2', 'tv2charlie', 'tv2fri','dk4', 'folketing', 'ndr', 'ard', 'zdf', 'rtl', 'sv1', 'sv2', 'sv4',
    'no2', 'tnt', 'regtv','tv2reg', '6', '9', 'animalplanet', '4', '5', 'euro1', 'euro2', 'tcm', 'cnn', 'disneychannel', 'disneyjunior', 'disneyxd', 'nick', 'CN','discov',
     'id', 'vh1', 'mtv', 'nationalgeo', 'boomerang', 'natgeowild', 'natgeoppl', 'ComedyCe', 'Tcl', "tv2news", "bbcwn",'bbcbrit', 'tv2zule',
    'tv3', 'tv3puls', 'tv3sp1', 'tv3sp2', 'tv3plus', 'viasatnat','viasathis', 'viasatgolf', 'viasatcomedy', 'viasatfam', 'viasatserie', 'viasatfilmhits', 'viasataction', 
    'viasatprim', 'playboy', 'tv2sport' ]

      return (

         <div>
           	<Header/>
            <form>
               <Projektvalg Projekt ={fiberProjekter} />
               <ProduktValg TVPakker = {TVPakker} kanaler = {kanaler} />
               <Tilmeld/>
               <button className= 'bestil' onClick = {sendTilmeld} > Tilmeld bestilling</button>
            </form>
            <Footer/>
         </div>

      );
   }
})



export default App;