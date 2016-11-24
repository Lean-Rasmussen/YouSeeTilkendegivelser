import React from 'react';
import Footer from "./components/Footer" 
import Header from "./components/Header" 
import ProduktValg from "./components/ProduktValg" 
import Projektvalg from "./components/Projektervalg" 
import Tilmeld from "./components/Tilmeld"



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

let tilmelding =
   {
      vej:"",
      nummer:'',
      navn: '',
      telefon:'',
      email:'',
      tvpakke:"",

   }

const getCustomerInfro = function(){
   tilmelding =
   {
      email:document.getElementById('email').value,
      tvpakke:document.getElementById('pakkevalg').value,
      vej: document.getElementById('vej').value,
      nummer:document.getElementById('nummer').value,
      navn: document.getElementById('fornavn').value + ' ' + document.getElementById('efternavn').value,
      telefon:document.getElementById('telefon').value,


   }
}
const resetform =function(){
let tilmelding =
   {
      vej:"",
      nummer:'',
      navn: '',
      telefon:'',
      email:'',
      tvpakke:"",

   }
}

const sendTilmeld = function(e){
   getCustomerInfro()
      if(tilmelding.navn ==='' || tilmelding.email ==='' || tilmelding.nummer ==='' || tilmelding.telefon ==='' ){
         alert('Udfyld venligst dine informationer')

   }else{
   alert('Tak for din tilmelding og bestilling')

   }
   console.log(tilmelding)
   resetform()
};

var App = React.createClass({
   render() {
   	// Data
   	const TVPakker =[{name:'HomeTrio Fiber', Id: 1, pic :"fiber"},
   						 {name :'HomeTrio Fiber extra', Id: 2, pic: "fiberextra"}, 
   						 {name :'HomeTrio Fiber Viasat', Id: 3, pic: "fiberviasat"}, 
   						 {name :'HomeTrio Fiber Total', Id: 4, pic : "fibertotal"}];



   //const kanalertotal = ["dr1",'dr2','dr3','ramasjag', 'drk', 'drultra', 'tv2', 'tv2charlie', 'tv2fri','dk4', 'folketing', 'ndr', 'ard', 'zdf', 'rtl', 'sv1', 'sv2', 'sv4',
   // 'no2', 'tnt', 'regtv','tv2reg', '6', '9', 'animalplanet', '4', '5', 'euro1', 'euro2', 'tcm', 'cnn', 'disneychannel', 'disneyjunior', 'disneyxd', 'nick', 'CN','discov',
   //'id', 'vh1', 'mtv', 'nationalgeo', 'boomerang', 'natgeowild', 'natgeoppl', 'ComedyCe', 'Tcl', "tv2news", "bbcwn",'bbcbrit', 'tv2zule',
   // 'tv3', 'tv3puls', 'tv3sp1', 'tv3sp2', 'tv3plus', 'viasatnat','viasathis', 'viasatgolf', 'viasatcomedy', 'viasatfam', 'viasatserie', 'viasatfilmhits', 'viasataction', 
    //'viasatprim', 'playboy', 'tv2sport' ]

    //const kanalerbasis = ["dr1",'dr2','dr3','ramasjag', 'drk', 'drultra', 'tv2', 'tv2charlie', 'tv2fri','dk4', 'folketing', 'ndr', 'ard', 'zdf', 'rtl', 'sv1', 'sv2', 'sv4',
    //'no2', 'tnt', 'regtv','tv2reg', '6', '9', 'animalplanet', '4', '5', 'euro1', 'euro2', 'tcm', 'cnn', 'disneychannel', 'disneyjunior', 'disneyxd', 'nick', 'CN','discov',
    //'id', 'vh1', 'mtv', 'nationalgeo', 'boomerang', 'natgeowild', 'natgeoppl', 'ComedyCe', 'Tcl','tv3', 'tv3puls']

    //const kanalextra = ["dr1",'dr2','dr3','ramasjag', 'drk', 'drultra', 'tv2', 'tv2charlie', 'tv2fri','dk4', 'folketing', 'ndr', 'ard', 'zdf', 'rtl', 'sv1', 'sv2', 'sv4',
    //'no2', 'tnt', 'regtv','tv2reg', '6', '9', 'animalplanet', '4', '5', 'euro1', 'euro2', 'tcm', 'cnn', 'disneychannel', 'disneyjunior', 'disneyxd', 'nick', 'CN','discov',
   //'id', 'vh1', 'mtv', 'nationalgeo', 'boomerang', 'natgeowild', 'natgeoppl', 'ComedyCe', 'Tcl', "tv2news", "bbcwn",'bbcbrit', 'tv3', 'tv3puls']

    //const kanalviasat =["dr1",'dr2','dr3','ramasjag', 'drk', 'drultra', 'tv2', 'tv2charlie', 'tv2fri','dk4', 'folketing', 'ndr', 'ard', 'zdf', 'rtl', 'sv1', 'sv2', 'sv4',
    //'no2', 'regtv','tv2reg', 'disneychannel', "tv2news",'tv2zule','tv3', 'tv3puls', 'tv3sp1', 'tv3sp2', 'tv3plus', 'viasatnat','viasathis', 'viasatgolf', 'viasatcomedy', 'viasatfam', 'viasatserie', 'viasatfilmhits', 'viasataction', 
    //'viasatprim', 'playboy', 'tv2sport' ]


   // const kanaler = kanalerbasis + kanalextra + kanalviasat + kanalertotal;

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