import React from 'react';
let imgIndex = 3;
var ProjektValg = React.createClass( {

	getInitialState() {
	    return {
		      TvImg: this.props.TVPakker[imgIndex].pic,
		      };
	  },	
	getImage(e){
		imgIndex = document.getElementById("pakkevalg").selectedIndex
		this.setState({
        TvImg : this.props.TVPakker[imgIndex].pic,
      });
	},

	render() {	
      return (
         <div className= 'Produktvalg'>
	         <h2> Valg af produkter</h2>
			<label>Vælg TV pakke</label>
			<select id = "pakkevalg" onChange = {this.getImage.bind(this)}>
			{this.props.TVPakker.map(function(pakke, id,){
				return <option  key = {pakke.Id} selected>{pakke.name}</option>
			})}
			</select>
			<div className = {this.state.TvImg} id ='valgtPakke'>
			</div>
			<ul className = 'tvkanaler'>
			{this.props.kanaler.map(function(kanal) {
				return <li className= 'kanal' key= {kanal} > <div className ='iconboks'> {kanal}</div> </li>
			})}
			</ul>
			<div className ='betingelser'>
			<a href= ''>Installations information</a>
			<a href= ''>Område og priser ved tilmeldinger</a>    
			<a href= ''>Betingelser for fællessalg</a>
			<label>Jeg acceptere betingelserne for tilmeldingen<input type ="checkbox" required/> </label>
			</div>
         </div>
      );
   }	
}); 
export default ProjektValg;