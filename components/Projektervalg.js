import React from 'react';
import PersonInfo from "./Personinfo";
let indexOfSelectedProject = 0;
var Projektvalg = React.createClass( {

    getInitialState() {
    return {
      roadNames: this.props.Projekt[indexOfSelectedProject].Vejnavne,
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
         <div>
         	<h3> Vaelg hvilket projekt du gerne vil tilmelde dig til </h3>
         	<label>Aktive projekter</label>
      		<div className ='projektStyle' >
          <select id = 'projectValgt' onChange = {this.updateVejnavne} required="">
          {this.props.Projekt.map(function(projekt, key){
              return <option>{projekt.ProjektNavn}</option> 
            })}
      			</select>
            </div>
            <p>Tilmeldte {5}</p>  
  			    <PersonInfo Vejnavne = {this.state.roadNames}/>
		    </div>
    );
  }
})
export default Projektvalg
