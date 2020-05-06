import React, { Component } from 'react'
import track1 from "../music/track1.mp3"
import track2 from "../music/track2.mp3"
import track3 from "../music/track3.mp3"
import track4 from "../music/track4.mp3"
import Forward from "./forward"
import Backward from "./backward"
import vinyl from "../Photos/vinyl.png"
import back from '../Photos/background.png';
import back2 from "../Photos/back2.png"
import speaker from "../Photos/speaker.png"
import Nav from "../components/nav/nav"
import Burger from "../components/side_burger"
import "./play.css"

var audio = document.getElementById("audio")
var is_on = false
var index = 0

// var volume = 0.1
export class play extends Component {
    state = {
        song_lst : [track1, track2, track3 ,track4],
        song_names : ["Dudley Theme song - Might night", "Wind waker - Zelda Orchestra",
                      " Method Man - Wu-Tang Clan" , "Light breez - Moonglight"],
        volume: 0.3
    }

    componentDidMount = () => {
        audio = document.getElementById("audio")
        audio.src = track1
        audio.onended = () => {
            this.forward()

        }
        var slider = document.getElementById("myRange")
        slider.value = this.state.volume * 100


    }
    play = (song) =>{
        // audio = document.getElementById("audio")
        audio.volume = this.state.volume 
        var vin = document.getElementById("vinyl1")
        var title = document.getElementById("title")
        title.innerText = this.state.song_names[index]
        if(is_on){
            audio.pause()
            
            // this.setState({song_on: false})
            is_on = false
            vin.setAttribute("style", "animation-play-state: paused;")
            document.body.style.backgroundImage = "url('../Photos/resume.png')";
            document.getElementById("main").src=back;

        }
        else{
            // this.setState({song_on: true})
            is_on = true;
            audio.play()
            vin.setAttribute("style", "animation-play-state: running;");
            document.getElementById("main").src=back2;

            
        }
    }

    forward = () => {
        // this.setState({song_on: false})
        is_on = false;
        index = (index + 1) % this.state.song_lst.length
        // this.setState({index: index % 3})
        audio.src = this.state.song_lst[index]
        this.play(this.state.song_lst[index])
        // audio.play()


        
    }

    backward = () => {
        is_on = false;
        index = index - 1
        if(index < 0){
            index = this.state.song_lst.length - 1
        }
        audio.src = this.state.song_lst[index]
        this.play(this.state.song_lst[index])

    
        
    }

    SetVolume = () => {
        var slider = document.getElementById("myRange")
            this.setState({
              volume: slider.value / 100
            })
        audio.volume = slider.value / 100
    }

    render() {
        return (
            <div>

                <img src={back} alt="back" id="main"/>
                <img src={vinyl} alt="VinylS" id="vinyl1"/>

                <div className="Search_butt">
                    <Burger></Burger>
                </div>

                <div onClick={() => this.play(this.state.song_lst[index])} className="play"/>
                
                <audio src="" id="audio" controls />
                <Forward onClick={this.forward}/>
                <Backward onClick={this.backward}/>
                <h3 id="title">Pick a song</h3>

                <div className="contain_slider_land">
                    {/* <img src={speaker} alt="speaker" id="speaker"/>  */}
                   <input className="slider" id="myRange" type="range" min="0" max="100" step="1" onChange={() => this.SetVolume()}></input>
                </div>

            </div>
        )
    }
}

export default play
