import React, { Component } from 'react'
import track1 from "../../music/track1.mp3"
import track2 from "../../music/track2.mp3"
import track3 from "../../music/track3.mp3"
import track4 from "../../music/track4.mp3"
import Forward from "../forward"
import Backward from "../backward"
import vinyl from "../../Photos/vinyl.png"
import searchback from "../../Photos/searchback.png"
import bigplay from "../../Photos/play.png"
import bigresume from "../../Photos/bottom_resume.png"
// import Nav from "../../components/nav2/nav2"
import Record from "../../components/record"
import next from "../../Photos/forward.png"
import back from "../../Photos/backward.png"
import axios from "axios"


import "./play2.css"

var audio = document.getElementById("audio1")
var is_on = false
var index = 0

// var volume = 0.1
export class play2 extends Component {
    state = {
        song_lst : [track1, track2, track3 ,track4],
        song_names : [],
        volume: 0.3,
        progress: 0,
        duration: 60, //this is in seconds
        selectedFile: null

    }; 

    componentDidMount = () => {
        axios.get("http://localhost:5000/track")    
        .then(res => {
            for(var i=0;i<res.data.length;i++){
                this.setState({song_names: [...this.state.song_names, res.data[i].Name]})
                // console.log(this.state.song_names)
            }
        })  



        var title = document.getElementById("title1")
        var title2 = document.getElementById("title2")
        title.innerText = "♥ Why not pick a song OWO ♥ "
        title2.innerText = "♥ Why not pick a song OWO ♥ "
        audio = document.getElementById("audio1")
        // audio.src = track1
        audio.onended = () => {
            this.forward()

        }
        var slider = document.getElementById("myRange1")
        slider.value = this.state.volume * 100
        var prog = document.getElementById("progress")
        prog.value = this.state.progress


    }
    play = (i, main) =>{
        // audio = document.getElementById("audio")
        // audio.pause()
        if(!main){
            index = i

            axios.get(`http://localhost:5000/download/${this.state.song_names[index]}`)    
            .then(res => console.log(res))

            audio.src = `http://localhost:5000/download/${this.state.song_names[index]}`
            // audio.src = this.state.song_lst[index]
            audio.play()
            audio.volume = this.state.volume 
            var vin = document.getElementById("vinyl")
            var title = document.getElementById("title1")
            var title2 = document.getElementById("title2")
            title.innerText = this.state.song_names[index]
            title2.innerText = this.state.song_names[index]
            is_on = true;

    
            // is_on = true;
            // audio.play()
            vin.setAttribute("style", "animation-play-state: running;");
            document.getElementById("bigplay").src=bigresume;

            return ;

        }
        audio.volume = this.state.volume 
        var vin = document.getElementById("vinyl")
        var title = document.getElementById("title1")
        var title2 = document.getElementById("title2")
        title.innerText = this.state.song_names[index]
        title2.innerText = this.state.song_names[index]

        // is_on = true;
        // audio.play()
        vin.setAttribute("style", "animation-play-state: running;");
        // document.body.style.backgroundImage = "url('../Photos/resume.png')";
        if(is_on){
            audio.pause()
            
            // this.setState({song_on: false})
            is_on = false
            vin.setAttribute("style", "animation-play-state: paused;")
            document.getElementById("bigplay").src=bigplay;
            // document.getElementById("main").src=back;

        }
        else{
            // this.setState({song_on: true})
            is_on = true;
            audio.play()
            vin.setAttribute("style", "animation-play-state: running;");
            document.getElementById("bigplay").src=bigresume;

            
        }
    }

    forward = () => {
        // this.setState({song_on: false})
        is_on = false;
        index = (index + 1) % 4
        // this.setState({index: index % 3})
        audio.src = this.state.song_lst[index]
        this.play(index)
        // audio.play()


        
    }

    backward = () => {
        is_on = false;
        index = index - 1
        if(index < 0){
            index = 2
        }
        audio.src = this.state.song_lst[index]
        this.play(this.state.song_lst[index])

    
        
    }

    SetVolume = () => {
        var slider = document.getElementById("myRange1")
            this.setState({
              volume: slider.value / 100
            })
        audio.volume = slider.value / 100
    }
    SetProgress = () => {
        var slider = document.getElementById("progress")
            this.setState({
              progress: slider.value // precentage
            })
        audio.currentTime = slider.value * (audio.duration/100);
    }
    upload = (e) =>{
        console.log("submit works")
        // console.log(this.state)
        var myfile = document.getElementById("myfile").files[0];
        // var res = myfile.name.split(".")[0];
        // console.log(res)
        console.log(myfile)
        const data = new FormData()
        data.append('myfile', myfile)
        var contenttype = {
            headers : {
                "content-type" : "multipart/form-data"
            }
        }
        // upload audio file to server
        console.log(data)
        axios.post("http://localhost:5000/upload", data, contenttype)    
        .then(res => console.log(res))
        
        // uploads name of the file which consequnly uploads the directry to the mongodb collection
        const track_info = {name:myfile.name.toLowerCase().split(" ").join("")}
        axios.post("http://localhost:5000/track/add", track_info)    
        .then(res => console.log(res))
        
    }
    onChangeHandler= (event) =>{
        console.log(event.target.files[0])
        console.log(document.getElementById("myfile").files[0])

        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
      
    render() {
        return (
            <div>
                <img src={searchback} alt="back" id="main"/>
                <img src={vinyl} alt="VinylS" id="vinyl"/>
                {/* <img src={speaker} alt="speaker" id="speaker"/> */}

                {/* <Nav id="nav"></Nav> */}

                <div onClick={() => this.play(this.state.song_lst[index])} className="play"/>
                <div className="record">
                    {this.state.song_names.map((block, i) => 
                        <Record key={i} onClick={() => this.play(i, false)} name={block}/>
                    )}
                    {/* <Record onClick={() => this.play(0, false)} name={this.state.song_names[0]}/>
                    <Record onClick={() => this.play(1, false)} name={this.state.song_names[1]}/>
                    <Record onClick={() => this.play(2, false)} name={this.state.song_names[2]}/>
                    <Record onClick={() => this.play(3, false)} name={this.state.song_names[3]}/> */}
                    <input onChange={this.onChangeHandler} type="file" name="myfile" id="myfile" accept="audio/*"/>
                    <button onClick={this.upload}>submit</button>



                </div>


                
                <audio src="http://localhost:5000/download" id="audio1" controls />
                <Forward onClick={this.forward}/>
                <Backward onClick={this.backward}/>
                <h3 id="title1">♥ Why not pick a song OWO ♥ </h3>

                <div className="contain_slider1">
                    <input className="slider1" id="myRange1" type="range" min="0" max="100" step="1" onChange={() => this.SetVolume()}></input>
                </div>
                <div className="progress_bar">
                    <input className="slider1" id="progress" type="range" min="0" max="100" step="1" onChange={() => this.SetProgress()}></input>
                </div>

                <div className="bottom_player">
                    <img  onClick={() => this.backward()} id="bigback" src={back} alt="back"/>
                    <img onClick={() => this.play(index, true)} id="bigplay" src={bigplay} alt="back"/>
                    <img onClick={() => this.forward()} id="bignext" src={next} alt="back"/>
                    <h3 id="title2">Choose a song OWO</h3>

                </div>

            </div>
        )
    }
}

export default play2
