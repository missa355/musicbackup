import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "./pick_box.css"
import axios from "axios"
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';




export class pick_box extends Component {
  state = {
    urls :[]
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/playlist")    
    .then(res => {
        for(var i=0;i<res.data.length;i++){
            this.setState({urls: [...this.state.urls, res.data[i].title]})
            // console.log(this.state.song_names)
        }
    })
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
                        <button id="add_butt" onClick={() => {this.handleClickDelete(); onClose();}}>
                          Add
                        </button>
                    </div>                 
                 )}

                  
                  {/* <div className="add_play">2</div>
                  <div className="add_play">3</div>
                  <div className="add_play">4</div>
                  <div className="add_play">5</div>
                  <div className="add_play">6</div>
                  <div className="add_play">7</div>
                  <div className="add_play">8</div>
                  <div className="add_play">9</div> */}


                  
                </div>
              );
            }
          });
        };
       
        render() {
          return (
            <div className='container'>
              <button onClick={this.submit}><PlaylistAddIcon/></button>
            </div>
          );
        }
}

export default pick_box
