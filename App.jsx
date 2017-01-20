import React from 'react';

import Footer from "./components/Footer" 
import Header from "./components/Header" 
import ProgressionMap from "./pages/ProgressionMap/ProgressionMap"
import SignUp from "./pages/SignUp/signUp"
import Vejledning from "./pages/Vejledning/Vejledning"




var App = React.createClass({
   render() {

      return (

         <div>
         <Header/>
         <SignUp/>
         <Footer/>
         </div>

      );
   }
})



export default App;