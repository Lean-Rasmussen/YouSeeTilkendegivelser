import React from 'react';


 class ProjektValg extends React.Component {
	
	constructor(props){
		super(props);
	}  
	Image(){console.log('TV bundle fyring')}

	render() {	
      return (
         <div className= 'Produktvalg'>
	          <h2> Valg af produkter</h2>
			<label>Vælg TV pakke</label>
			<select  onChange = {this.Image.bind(this)} required="">
			{this.props.TVPakker.map(function(pakke, id,){
				return <option  key = {pakke.Id} selected>{pakke.name}</option>
			})}
			</select>
			<label> Billede af tv pakke</label>
			<div className = 'pakevalg'>
				<img src = {2}/>
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
}
export default ProjektValg;