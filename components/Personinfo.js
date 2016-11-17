import React from 'react';

export default class PersonInfo extends React.Component {
   render() {
      return (
         <div className = 'personinfostyle'>
         	<h2>Personlige oplysninger</h2>
           <div className = 'blanket'>
           <div className= 'blanketchild'>
        			<label>Vejnaven:</label>
        			<select>
                      {this.props.Vejnavne.map(function(vejnavn){
                   		   return <option >{vejnavn}</option>
                   		 })}          	
      			</select>		
            </div>
            <div className= 'blanketchild'>
                	<label>Husnummer</label>
                  <input required= ""/></div>
            
            <div className= 'blanketchild'>      
      			<label>Fornavn</label>
      			<input type="text" required=""/></div>
            
            <div className= 'blanketchild'>
      			<label>Efternavn</label>
      			<input type="text" required=""/></div>
            
            <div className= 'blanketchild'>
      			<label>Telefon nummer</label>
      			<input type="tel"required=""/></div>
      			
            <div className= 'blanketchild'>
            <label>Email</label>
      			<input type="email"/></div>
       </div>
         </div>
      );
   }
}
