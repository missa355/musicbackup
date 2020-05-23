import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "./Pages/search"
import Login from "./components/login/login"
import Signup from "./Pages/Singup/signup"
import Land from "./Pages/land/land"
import Explore from "./Pages/explore/Explore"
import Upload from "./Pages/upload/Upload_page"
import axios from "axios"
import Playlist from "./components/playsearch/play2"
import Testcomp from "./components/uploadedmusic/uploadedmusic"
import BottomTest from "./components/bottom_test"

import './App.css';


export class App extends Component {
  state = {
    urls :[],
    names: []
  }


  componentDidMount = () => {
    document.title = 'Sleepy-audio';

    axios.get("https://teaaurora.ngrok.io/playlist")    
    .then(res => {
        for(var i=0;i<res.data.length;i++){
            this.setState({urls: [...this.state.urls, res.data[i].PID]})
            this.setState({names: [...this.state.names, res.data[i].title]})

            // console.log(this.state.song_names)
        }
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ props =>(
            <React.Fragment>
              <Land {...props}/>
            </React.Fragment>
            )}/>
            
          <Route exact path="/bottom" render={ props =>(
            <React.Fragment>
              <BottomTest {...props}/>
            </React.Fragment>
          )}/>

          <Route exact path="/search" render={ props =>(
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

          <Route exact path="/garage" render={ props =>(
            <React.Fragment>
              <Testcomp {...props}/>
            </React.Fragment>
          )}/>
        

        {this.state.urls.map((block, i) => 
            <Route key={i} exact path={`/playlist/${block}`} render={ props =>(
              <React.Fragment>
                <Playlist title={this.state.names[i]} key={i} pid={block} {...props}/>
              </React.Fragment>          
            )}/>        
          )}

            {/* <Route exact path='/playlist/:pid' render={ props =>(
              <React.Fragment>
                <Playlist {...props}/>
              </React.Fragment>          
            )}/> */}
        </div>
      </Router>
    );
  }
}

export default App

