import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "./pick_box.css"
import axios from "axios"
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';




export class pick_box extends Component {
  state = {
    urls :[],
    pids :[]
  }

  componentDidMount = () => {
    axios.get(`https://0c67bf6eec81.ngrok.io/playlist/user/${JSON.parse(localStorage.getItem('email'))}`)    
    .then(res => {
        for(var i=0;i<res.data.length;i++){
            this.setState({urls: [...this.state.urls, res.data[i].title]})
            this.setState({pids: [...this.state.pids, res.data[i].PID]})

            // console.log(this.state.song_names)
        }
    })
  }
  addtoplaylist = (i) => {
    // console.log("fake added to playlists")
    var playlst = {PID:this.state.pids[i], track:this.props.song, tid:this.props.tid}
    console.log(playlst)
    axios.post("https://0c67bf6eec81.ngrok.io/playlist/add_track_to_playlist", playlst)
    .then(res =>  console.log(res))    
    document.getElementById(this.state.urls[i]).innerHTML = "Added ✓"

  }


  submit = () => {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h3>Add to playlist</h3>
                  {this.state.urls.map((block, i) => 
                    <div key={i} className="add_play">
                        <p>{block}</p>
                        <button id={block} onClick={() => {this.addtoplaylist(i)}}>
                          Add
                        </button>
                    </div>                 
                 )}
                  
                </div>
              );
            }
          });
        };
       
        render() {
          return (
            <div className='container'>
              <button onClick={this.submit}><PlaylistAddIcon id="add_im"/></button>
            </div>
          );
        }
}

export default pick_box
