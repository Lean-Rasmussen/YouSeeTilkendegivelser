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
			<div className ='betingelser'>
			<a href= ''>Betingelser for indvendig installation</a> 
			<a href= ''>installations information</a>
			<a href= ''>område og priser for</a>    
			<a href= ''>betingelser for fællessalg</a>
			</div>
			<button className= 'bestil'> Tilmeld bestilling</button>
         </div>
      );
   }	
});
export default ProjektValg;