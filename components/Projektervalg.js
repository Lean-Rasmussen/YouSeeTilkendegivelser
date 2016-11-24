import React from 'react';
import PersonInfo from "./Personinfo";
let indexOfSelectedProject = 0;
var Projektvalg = React.createClass( {

    getInitialState() {
    return {
      roadNames: this.props.Projekt[indexOfSelectedProject].Vejnavne,
      tilmeldte : this.props.Projekt[indexOfSelectedProject].tilmeldte.length,
      }
  },
    updateVejnavne(e) {
      indexOfSelectedProject = document.getElementById("projectValgt").selectedIndex
      this.setState({
        roadNames:this.props.Projekt[indexOfSelectedProject].Vejnavne,
      });

  },
   render() {
      return (
         <div className= 'projectvalgContainer'>
         	<h3> Vælg hvilket projekt du gerne vil tilmelde dig til </h3>
         	<label>Aktive projekter</label>
      		<div className ='projektStyle' >
          <select id = 'projectValgt' onChange = {this.updateVejnavne} required="">
          {this.props.Projekt.map(function(projekt, key){
              return <option key = {projekt.ProjektNavn}>{projekt.ProjektNavn}</option> 
            })}
      			</select>
            </div>
            <p>Tilmeldte antal {this.state.tilmeldte}</p> 
  			    <PersonInfo Vejnavne = {this.state.roadNames}/>
		    </div>
    );
  }
})
export default Projektvalg
