import React from 'react';
import PersonInfo from "./Personinfo";
let indexOfSelectedProject = 0;
var Projektvalg = React.createClass( {

    getInitialState() {
    return {
      roadNames: this.props.Projekt[indexOfSelectedProject].Vejnavne,
      tilmeldte : this.props.Projekt[indexOfSelectedProject].tilmeldte.length,
      map: this.props.Projekt[indexOfSelectedProject].kort,
      }
  },
    updateVejnavne(e) {
      indexOfSelectedProject = document.getElementById("projectValgt").selectedIndex
      this.setState({
        roadNames:this.props.Projekt[indexOfSelectedProject].Vejnavne,
        map: this.props.Projekt[indexOfSelectedProject].kort,
      });


  },
   render() {
      return (
         <div className= 'projectvalgContainer'>
          <div id ='projektKort' onclick ={2+4} className={this.state.map} ></div>
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
