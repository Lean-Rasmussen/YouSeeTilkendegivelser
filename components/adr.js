import React from 'react';


class AdresseValg extends React.Component {
  constructor(props){
    super(props);
    
  }  
  getProject(){
  
  }
   render() {
      return (
         <div>
  			<label>Vejnaven:</label>
  			<select required=''>
                {this.props.Vejnavne.map(function(vejnavn){
             		   return <option >{vejnavn}</option>
             		 })}          	
			   </select>		
		 </div>
      );
   }
}
export default AdresseValg