import React from 'react';
let imgIndex = 3;
let valgtBB = 3;
let multiroom =0;
let valgtMobilAbo = 0;
let antalExtranumre = 0;
var ProjektValg = React.createClass({

	getInitialState() {

	    return {	
				TvImg : this.props.TVPakker[imgIndex].pic,
		      };
	  },	
	getImage(e){
		imgIndex = document.getElementById("pakkevalg").selectedIndex
		valgtBB = document.getElementById("BBhastighed").selectedIndex
		multiroom = document.getElementById("multiroom").selectedIndex
		valgtMobilAbo = document.getElementById("MobilAbo").selectedIndex
		antalExtranumre = document.getElementById("ExtraNumre").selectedIndex

		this.setState({
        TvImg : this.props.TVPakker[imgIndex].pic,
        Tvpris : this.props.TVPakker[imgIndex].pris,
        MultiroompPris : this.props.Multiroom[multiroom].pris,
        BBpris : this.props.BBhastighed[valgtBB].pris,
        MobilAboPris: this.props.MobilAbo[valgtMobilAbo].pris,
        ExtraNumrePris: this.props.ExtraNumre[antalExtranumre].pris,
      });
	},
	render() {	
      return (
         <div className= 'Produktvalg'>
	         <h2> Valg af produkter</h2>
			<label>Vælg TV pakke</label>
			<select id = "pakkevalg" onChange = {this.getImage}>
				{this.props.TVPakker.map(function(pakke, id,){
					return <option  key = {pakke.Id} selected>{pakke.name}</option>
				})}
			</select>
			
			<label>Multiroom antal extra TV</label>
			<select id = "multiroom" onChange = {this.getImage}>
				{this.props.Multiroom.map(function(antal, id){
						return <option  key = {id} selected>{antal.name}</option>
				})}
			</select>
			
			<label>Vælg Bredbåndshastighed</label>
			<select id = "BBhastighed" onChange = {this.getImage}>
				{this.props.BBhastighed.map(function(pakke, id,){
						return <option  key = {pakke.Id} selected>{pakke.name}</option>
				})}
			</select>
			
			<label>Vælg Mobil abonnoment</label>
			<select id = "MobilAbo" onChange = {this.getImage}>
				{this.props.MobilAbo.map(function(abo, id,){
						return <option  key = {id} selected>{abo.name}</option>
				})}
			</select>
			
			<label>Antal extranumre</label>
			<select id = "ExtraNumre" onChange = {this.getImage}>
				{this.props.ExtraNumre.map(function(antal, id){
						return <option  key = {id} selected>{antal.name}</option>
				})}
			</select>

			<h1 className= 'Pris'> Pris pr mrd {this.state.Tvpris + this.state.MultiroompPris + this.state.BBpris + this.state.MobilAboPris + this.state.ExtraNumrePris},- </h1>
			<div className = {this.state.TvImg} id ='valgtPakke'></div>
				{/*<ul className = 'tvkanaler'>
				{this.props.kanaler.map(function(kanal) {
					return <li className= 'kanal' key= {kanal} > <div className ='iconboks'> {kanal}</div> </li>
				})}
				</ul>*/}
			<div className ='betingelser'>
				<a href= ''>Installations information</a>
				<a href= ''>Område og priser ved tilmeldinger</a>    
				<a href= ''>Betingelser for fællessalg</a>
				<label>Jeg acceptere betingelserne for tilmeldingen <input id= 'betingelserCheckBox' type ="checkbox" required/> </label>
			</div>
         </div>
      );
   }	
}); 
export default ProjektValg;