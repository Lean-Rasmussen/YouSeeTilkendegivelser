import React from 'react';
const basistv = require('./img/HTF.png');

 class ProjektValg extends React.Component {
	
	constructor(props){
		super(props);
	}  
	Image(){console.log('TV bundle fyring')}

	render() {	
      return (
         <div>
	          <h2> Valg af produkter</h2>
			<label>Vaelg TV pakke</label>
			<select  onChange = {this.Image.bind(this)} required="">
			{this.props.TVPakker.map(function(pakke, id,){
				return <option  key = {pakke.Id} selected>{pakke.name}</option>
			})}
			</select>
			<label> Billede af tv pakke</label>
			<img src = {basistv}/>
			<label>Onsker du indvendig installation (kr'ver tomr'r)</label> <a href= ''>Betingelser for indvendig installation</a> 
			<input type="checkbox" name="invendig installation"/>
         </div>
      );
   }	
}
export default ProjektValg;