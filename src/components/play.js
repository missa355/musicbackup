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
import {getFromStorage, setInStorage} from "../utils/storage"
import axios from "axios"
import Header from "../components/Header/Header"

var audio = document.getElementById("audio")
var is_on = false
var index = 0

// var volume = 0.1
export class play extends Component {
    
    demo = (e) => {
        e.preventDefault();
        const User = {
            Email:"test@hotmail.com", 
            Password:"12345678"
        }
        //once logged in save the user token in local stroage
        axios.post("https://0c67bf6eec81.ngrok.io/signin", User) //this 
        .then(res =>  {
            // console.log('json',res.data);
            if(res.data.success === true){
                console.log("valid user. Token saved locally", res.data.success);
                setInStorage('the_main_app', {token: res.data.token});
                setInStorage('valid', {token: res.data.success});
                setInStorage('name', res.data.name);
                setInStorage('email', res.data.email);

                // this.setState({loggedin:true})
                setTimeout(()=>{window.location.reload();
                }, 1000)
            }
            else{   
                console.log(res.data.success)

            }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="land_page_back">
                    <h1 id="landing_title">Sound Frog</h1>
                    <h2 id="landing_subtitle">Music side of things</h2>
                    <button id="music_demo">Check it out!</button>





                    {/* <div onClick={() => this.play(this.state.song_lst[index])} className="play"/>
                    
                    <audio src="" id="audio" controls />
                    <Forward onClick={this.forward}/>
                    <Backward onClick={this.backward}/> */}
                    {/* <h3 onClick={this.demo} id="title">Click for a Quick Demo</h3> */}
{/* 
                    <div className="contain_slider_land">
                    <input className="slider" id="myRange" type="range" min="0" max="100" step="1" onChange={() => this.SetVolume()}></input>
                    </div> */}

                </div>
            </div>
        )
    }
}

export default play
