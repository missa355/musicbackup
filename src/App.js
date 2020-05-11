import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "./Pages/search"
import Login from "./components/login/login"
import Signup from "./Pages/Singup/signup"
import Land from "./Pages/land/land"
import Explore from "./Pages/explore/Explore"
import Upload from "./Pages/upload/Upload_page"

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
        <Route exact path="/explore" render={ props =>(
          <React.Fragment>
            <Explore {...props}/>
          </React.Fragment>
        )}/>
        <Route exact path="/login" render={ props =>(
          <React.Fragment>
            <Login {...props}/>
          </React.Fragment>
        )}/>
        <Route exact path="/signup" render={ props =>(
          <React.Fragment>
            <Signup {...props}/>
          </React.Fragment>
        )}/>
        <Route exact path="/upload" render={ props =>(
          <React.Fragment>
            <Upload {...props}/>
          </React.Fragment>
        )}/>
      </div>
    </Router>
  );
}

export default App;
