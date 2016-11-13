import React from 'react';
import AdresseValg from "./adr"
let indexOfSelectedProject = 0


class Projektvalg extends React.Component {
  constructor(props){
    super(props);
  }  
  getProject(){
    indexOfSelectedProject = document.getElementById("projectValgt").selectedIndex
    render(AdresseValg)
  }
   render() {
      return (
         <div>
         	<h2> Vaelg hvilket projekt du gerne vil tilmelde dig til </h2>
         	<label>Aktive projekter</label>
			<select id = 'projectValgt' onChange = {this.getProject.bind(this)} required="">
      {this.props.Projekt.map(function(vejnavn){
          return <option key= {vejnavn.ProjektNavn} >{vejnavn.ProjektNavn}</option> 
        })}
  			</select>
        <p>Tilmeldte {5}</p>
         <br></br>   
  			<AdresseValg Vejnavne = {this.props.Projekt[indexOfSelectedProject].Vejnavne}/>
        <label>Husnummer</label>
      <input required= ""/>
		 </div>
    );
  }
}
export default Projektvalg
