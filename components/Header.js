import React from 'react';

export default class Header extends React.Component {
   render() {
      return (
      	<div className='headercontainer'>
      	<div className = 'logo'> </div>
         <div className = 'header'>
        <ul className = 'nav-bar'>
            <li>Hovedsiden</li>
            <li>Tilmelding</li>
            <li>Hvorlangt er vores projekt</li>
            <li>Kundeliste</li>
        </ul>
          <h1> Fællessalg tilmelding</h1>
          </div>

         </div>

      );
   }
}



