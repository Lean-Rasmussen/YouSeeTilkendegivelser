import React from 'react';

export default class PersonInfo extends React.Component {
   render() {
      return (
         <div>
         <h2>Personlige oplysninger</h2>
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
