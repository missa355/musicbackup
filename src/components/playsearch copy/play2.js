import React, { Component } from 'react'
import track1 from "../../music/HUMBLE.mp3"
import track2 from "../../music/DNA.mp3"
import track3 from "../../music/FEAR.mp3"
import track4 from "../../music/ELEMENT.mp3"
import RangeSlider from 'react-bootstrap-range-slider';
import Forward from "../forward"
import Backward from "../backward"
import vinyl from "../../Photos/vinyl.png"
import searchback from "../../Photos/searchback.png"
import bigplay from "../../Photos/play.png"
import bigresume from "../../Photos/bottom_resume.png"
import pause from "../../Photos/pause.png"
// import Nav from "../../components/nav2/nav2"
import Record from "../record"
import next from "../../Photos/forward.png"
import back from "../../Photos/backward.png"
import axios from "axios"
import Navbar from "../side_burger"
import cover from "../../Photos/DAMN.png"
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import playbutt from "../../Photos/music.png"
import recordpause from "../../Photos/signs.png"


import "./play2.css"



var audio = document.getElementById("audio1")
var is_on = false
var index = 0
var curr_volume = 0.3
var record_ind = 0

// var volume = 0.1
export class play2 extends Component {
    state = {
        song_lst : [],
        song_names : [],
        volume: 0.3,
        progress: 0,
        duration: 60, //this is in seconds
        selectedFile: null,
        exists: false

    }; 

    //=================================================================================================================
    componentDidMount = () => {
        // localStorage.setItem(this.props.match.params.pid, 0)
        // console.log(this.props.pid)
        axios.get(`https://teaaurora.ngrok.io/playlist/${this.props.pid}`)
        .then(res => {
                console.log(res.data[0].Songs)
                this.setState({song_names: res.data[0].Songs})

            })



            // axios.get("https://teaaurora.ngrok.io/track")    
            // .then(res => {
            //     for(var i=0;i<res.data.length;i++){
            //         this.setState({song_names: [...this.state.song_names, res.data[i].Name.toLowerCase().split(" ").join("")]})
            //         // console.log(this.state.song_names)
            //     }
            // })  

 
            audio = document.getElementById("audio1")
            // audio.src = track1
            if(audio){
                audio.onended = () => {
                    this.forward()
    
                }
            }
 
            var slider = document.getElementById("volume_bar")
            if(slider){
                slider.defaultValue = this.state.volume * 100

            }
            // var prog = document.getElementById("time_bar")
            // prog.value = this.state.progress
        

        


    }
    play = (i, main) =>{
        // var prog = document.getElementById("time_bar")
        // prog.click();
        // audio = document.getElementById("audio")
        // audio.pause()
        // console.log(is_on, i, index)
        if(!main){


            // axios.get(`https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`)    
            // .then(res => console.log(res))

            // audio.src = `https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`
            // // audio.src = this.state.song_lst[index]
            // // audio.volume = this.state.volume 
            audio.volume = curr_volume
            if(is_on === false){
                // console.log("is not on")
                axios.get(`https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`)    
                .then(res => console.log(res))
    
                audio.src = `https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`
                // audio.src = this.state.song_lst[index]
                // audio.volume = this.state.volume 

                audio.play()
                record_ind = 1

                document.getElementById(this.state.song_names[i]).src = recordpause
                document.getElementById("bigplay").src=pause;

                is_on = true;
                index = i

                return ;

            }

            else if(is_on === true  && index === i){
                // console.log("is on and indexes are the same")
                audio.pause()
                record_ind = 0

                document.getElementById(this.state.song_names[i]).src = playbutt
                // document.getElementById(this.state.song_names[i]).stateIndex = 0
                document.getElementById("bigplay").src=bigplay;

                is_on = false
                return ;

                
    
            }

            else if(is_on === true && index !== i){
                // console.log("picked different one")
                axios.get(`https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`)    
                .then(res => console.log(res))
    
                audio.src = `https://teaaurora.ngrok.io/download/${this.state.song_names[i]}`


                // document.getElementById(this.state.song_names[index]).stateIndex = 0
                // document.getElementById(this.state.song_names[i]).stateIndex = 1
                document.getElementById(this.state.song_names[index]).src = playbutt
                document.getElementById(this.state.song_names[i]).src = recordpause

                
                audio.play()
                record_ind = 1
                index = i

                is_on = true;
                return ;

            }


    
            // is_on = true;
            // audio.play()


        }

        // audio.volume = this.state.volume 
        audio.volume = curr_volume



        // is_on = true;
        // audio.play()
        // document.body.style.backgroundImage = "url('../Photos/resume.png')";
        if(is_on){
            audio.pause()
            document.getElementById(this.state.song_names[index]).src = playbutt

            
            // this.setState({song_on: false})
            is_on = false
            document.getElementById("bigplay").src=bigplay;

        }
        else{
            // this.setState({song_on: true})
            is_on = true;
            document.getElementById("bigplay").src=pause;
            audio.play()

            
        }
    }

    forward = () => {

        // this.setState({song_on: false})
        is_on = false;
        index = (index + 1) % this.state.song_names.length
        // this.setState({index: index % 3})
        axios.get(`https://teaaurora.ngrok.io/download/${this.state.song_names[index]}`)    
        .then(res => console.log(res))

        audio.src = `https://teaaurora.ngrok.io/download/${this.state.song_names[index]}`       
        this.play(index, true)
        // audio.play()


        
    }

    backward = () => {
        is_on = false;
        index = index - 1
        if(index < 0){
            index = this.state.song_names.length - 1
        }
        axios.get(`https://teaaurora.ngrok.io/download/${this.state.song_names[index]}`)    
        .then(res => console.log(res))

        audio.src = `https://teaaurora.ngrok.io/download/${this.state.song_names[index]}`
        this.play(index, true)

    
        
    }

    SetVolume = (val) => {
        // this.setState({
        //       volume: val/100
        //     })
        console.log(val)

        audio.volume = val/100
    }
    SetProgress = () => {
        var prog = document.getElementById("myRange1")
        audio.currentTime= (prog.value/100)*audio.duration;
    }
    // upload = (e) =>{
    //     console.log("submit works")
    //     // console.log(this.state)
    //     var myfile = document.getElementById("myfile").files[0];
    //     // var res = myfile.name.split(".")[0];
    //     // console.log(res)
    //     console.log(myfile)
    //     const data = new FormData()
    //     data.append('myfile', myfile)
    //     var contenttype = {
    //         headers : {
    //             "content-type" : "multipart/form-data"
    //         }
    //     }
    //     // upload audio file to server
    //     console.log(data)
    //     axios.post("http://localhost:5000/upload", data, contenttype)    
    //     .then(res => console.log(res))
        
    //     // uploads name of the file which consequnly uploads the directry to the mongodb collection
    //     const track_info = {name:myfile.name.toLowerCase().split(" ").join("")}
    //     axios.post("http://localhost:5000/track/add", track_info)    
    //     .then(res => console.log(res))
        
    // }
    // onChangeHandler= (event) =>{
    //     console.log(event.target.files[0])
    //     console.log(document.getElementById("myfile").files[0])

    //     this.setState({
    //       selectedFile: event.target.files[0],
    //       loaded: 0,
    //     })
    //   }

    updatetimer = () => {
        var timer = document.getElementById("current_timer")
        var seconds = audio.currentTime
        var minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        timer.innerHTML =  minutes + ":" + seconds
        var prog = document.getElementById("myRange1")
        // console.log(prog.value, audio.currentTime, audio.duration)
        if(Number.isNaN(audio.duration)){
            prog.value = 0;
        }
        else{
            prog.value = (audio.currentTime/audio.duration) * 100
        }
    }



    //=================================================================================================================
      
    render() {
            // console.log("we are in business")
        
            return (
                <div id="search_div">
                    <Navbar></Navbar>

                    <div className="main_block_search" style={{height:`${44 + 8.5*this.state.song_names.length}vh`}}>

                        <div id="infobox">
                            <img alt="damn" src={cover}/>
                            <h2>DAMN.</h2>
                            <p>Studio album by Kendrick Lamar</p>
                        </div>
                        {this.state.song_names.map((block, i) => 
                                <Record className="tracks" key={i} onClick={() => this.play(i, false)} name={block} stateIndex={record_ind}/>
                        )}

                        <audio src="https://teaaurora.ngrok.io/download" id="audio1" controls onTimeUpdate={this.updatetimer} />

                    </div>
                    <p id="current_timer">0:00</p>

                    <div className="bottom_player">

                            <img id ="small_cover" alt="album cover" src={cover}/>

                            <img  onClick={() => this.backward()} id="bigback" src={back} alt="back"/>
                            <img onClick={() => this.play(0, true)} id="bigplay" src={bigplay} alt="back"/>
                            <img onClick={() => this.forward()} id="bignext" src={next} alt="back"/>
                            <h3 id="title2">DNA.</h3>
                            <p id="artist">Kendrick Lamar</p>

                            <div className="contain_slider1">
                                <input type="range" min="0" max="100" defaultValue="0" className="slider1" id="myRange1" onChange={() => this.SetProgress()}/>
                                <VolumeDown id='volume'/> 
                                <Slider defaultValue={30} id="volume_bar" aria-labelledby="disabled-slider" onChange={ (e, val) => this.SetVolume(val) }  />

                            </div>


                        </div>

                </div>
                
            )

        
    }
}

export default play2
