import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Play from "./components/play"
import Search from "./Pages/search"
import Login from "./components/login/login"
import Signup from "./Pages/Singup/signup"
import Nav from "./components/nav/nav"
import Sample from "./Pages/sample/sample"
import Land from "./Pages/land/land"

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={ props =>(
          <React.Fragment>
            <Land {...props}/>
          </React.Fragment>
          )}/>
          
        <Route exact path="/search" render={ props =>(
          <React.Fragment>
            <Search {...props}/>
          </React.Fragment>
        )}/>
        <Route exact path="/login" render={ props =>(
          <React.Fragment>
            <Login {...props}/>
          </React.Fragment>
        )}/>
        <Route exact path="/Signup" render={ props =>(
          <React.Fragment>
            <Signup {...props}/>
          </React.Fragment>
        )}/>
      
      </div>
    </Router>
  );
}

export default App;
