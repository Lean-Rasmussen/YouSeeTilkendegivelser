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
   tilmeldte : [],
   kort: 'KortRyttergaarden' ,
   },
   {
   ProjektNavn : 'Steenstrup',            
   Vejnavne : ['Holmevej','Toftevaenget', 'Sommervej','Vinterstien'],
   KontaktPerson : 'Olga Johansen',
   YouSeeProjektLeder : "Thomas Thomsen",
   tilmeldte :[],
   kort: 'KortSteenstrup',
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

   }else if(document.getElementById('betingelserCheckBox').checked === false){
      alert('Check venligst betingelserne for tilmelding')
   } else{
      let chosenProject = document.getElementById("projectValgt").selectedIndex;
      fiberProjekter[chosenProject].tilmeldte.push(tilmelding);
      alert('Tak for din tilmelding og bestilling')
      
   }
   resetform()
};

var App = React.createClass({
   render() {
   	// Data
   	const TVPakker =[
      {name:'HomeTrio Fiber', Id: 1, pic :"fiber", pris: 564},
     	{name :'HomeTrio Fiber extra', Id: 2, pic: "fiberextra", pris : 614}, 
     	{name :'HomeTrio Fiber Viasat', Id: 3, pic: "fiberviasat", pris: 664}, 
     	{name :'HomeTrio Fiber Total', Id: 4, pic : "fibertotal", pris: 764}
    ];

    const ExtraNumre =[ 
      {name:'4', pris: 476},
      {name:'3', pris: 357},
      {name:'2', pris: 238},
      {name:'1', pris: 119},
      {name:'0', pris: 0},
    ];

    const BBhastighed =[    
      {name: "500/50", Id: 'BB4', pris: 150},
      {name: "300/30", Id: 'BB3', pris: 100},
      {name: "100/20", Id: 'BB2', pris: 50},
      {name: "50/10", Id: 'BB1',  pris: 0},
    ];

    const MobilAbo =[
      {name: 'Fritale 25gb', Id: 'M4', pris: 299},
      {name: 'Fritale 10gb', Id: 'M3', pris: 199},
      {name: 'Fritale 5gb', Id: 'M2', pris: 149},
      {name: '', Id: 'M1', pris: 0},
    ];

    const Multiroom  =[
      {name:'4', pris: 100},
      {name:'3', pris: 100},
      {name:'2', pris: 100},
      {name:'1', pris: 100},
      {name:'0', pris: 0},
    ];

    const Phases = [{
      Name : 'Tilmeldinger',
      Description: 'Vi er [bne for tilmeldinger til tilslutning af projektet, prisen for tilslutning kan varriere efter antal af tilmeldte, se tilmeldings side omkring dette',
      StartDate : 22022017,
      EndDate: 24042017,
      PhaseNumber: 1,
    },{
      Name : 'Planlægning',
      Description: ' Kort text omkring gravning',
      StartDate : '01032017',
      EndDate: '01042017',
      PhaseNumber: 2,
    },{
      Name : 'Gravning',
      Description: 'kort text omkring gravning',
      StartDate : '01052017',
      EndDate: '01052017',
      PhaseNumber: 3,
    },{
      Name : 'Opsætning af fiberstik',
      Description: 'kort text omkring stik opsæt',
      StartDate : '01052017',
      EndDate: 20052017,
      PhaseNumber: 4,
    },{
      Name : 'Installations Teknikker',
      Description: 'Text omkring Installations Teknikker',
      StartDate : '05022017',
      EndDate: '01062017',
      PhaseNumber: 5,
    },{
      Name : 'Re-etablering',
      Description: 'kort text omkring Re-etablering',
      StartDate : '05062017',
      EndDate: 20052017,
      PhaseNumber: 6,
    },
]




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
               <ProduktValg TVPakker = {TVPakker} Multiroom={Multiroom} BBhastighed = {BBhastighed} MobilAbo={MobilAbo} ExtraNumre={ExtraNumre}  />
               <Tilmeld/>
               <button className= 'bestil' onClick = {sendTilmeld} > Tilmeld bestilling</button>
            </form>
            <Footer/>
         </div>

      );
   }
})



export default SignUp;