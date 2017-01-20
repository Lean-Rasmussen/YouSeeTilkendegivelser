import React from 'react';

export default class PersonInfo extends React.Component {
   render() {
      return (
         <div className = 'personinfostyle'>
         	<h2>Personlige oplysninger</h2>
           <div className = 'blanket'>
           <div className= 'blanketchild'>
        			<label>Vejnaven:</label>
        			<select id='vej'>
                      {this.props.Vejnavne.map(function(vejnavn){
                   		   return <option key={vejnavn} >{vejnavn}</option>
                   		 })}          	
      			</select>		
            </div>
            <div className= 'blanketchild'>
                	<label>Husnummer</label>
                  <input id="nummer" required/></div>
            
            <div className= 'blanketchild'>      
      			<label>Fornavn</label>
      			<input type="text" required pattern=".{2,15}" id='fornavn' /></div>
            
            <div className= 'blanketchild'>
      			<label>Efternavn</label>
      			<input type="text" required pattern=".{2,15}" id= 'efternavn'/></div>
            
            <div className= 'blanketchild'>
      			<label>Telefon nummer</label>
      			<input type="tel" required pattern=".{8,8}" id='telefon'/></div>
      			
            <div className= 'blanketchild'>
            <label>Email</label>
      			<input type="email" required id='email'/></div>
       </div>
         </div>
      );
   }
}
