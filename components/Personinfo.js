import React from 'react';

export default class PersonInfo extends React.Component {
   render() {
      return (
         <div className = 'personinfostyle'>
         	<h2>Personlige oplysninger</h2>
  			<label>Vejnaven:</label>
  			<select>
                {this.props.Vejnavne.map(function(vejnavn){
             		   return <option >{vejnavn}</option>
             		 })}          	
			</select>		
          	<label>Husnummer</label>
            <input required= ""/>
			<label>Fornavn</label>
			<input type="text" required=""/>
			<label>Efternavn</label>
			<input type="text" required=""/>
			<br></br>
			<label>Telefon nummer</label>
			<input type="tel"required=""/>
			<label>Email</label>
			<input type="email"/>
         </div>
      );
   }
}
