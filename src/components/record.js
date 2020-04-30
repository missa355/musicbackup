import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import track2 from "../music/track2.mp3"
import Bottom from "../components/bottom_player/bottom_player"
import "./record.css"
import playbutt from "../Photos/small_play.png"
import { PropTypes } from 'prop-types'

export class record extends Component {

    onclick = () =>{
        this.props.onClick()
    }
    // state = {
    //     // song_lst : [track1, track2, track3 ,track4],
    //     song_names : ["Dudley Theme song - Might night", "Wind waker - Zelda Orchestra",
    //                   " Method Man - Wu-Tang Clan" , "Light breez - Moonglight"],
    //     volume: 0.3,
    //     track: this.props.track
    // }

    // componentDidMount = () => {
    //     var title = document.getElementById("title1")
    //     title.innerText = "♥ Why not pick a song OWO ♥ "
    //     var audio = document.getElementById("audio")
    //     audio.src = this.state.track
    //     audio.onended = () => {
    //         this.forward()

    //     }
    //     var slider = document.getElementById("myRange1")
    //     slider.value = this.state.volume * 100


    // }
    // play = (index, main) =>{
    //     // audio = document.getElementById("audio")
    //     audio.pause()
    //     audio.src = this.state.song_lst[index]
    //     audio.volume = this.state.volume 
    //     var vin = document.getElementById("vinyl")
    //     var title = document.getElementById("title1")
    //     title.innerText = this.state.song_names[index]
    //     is_on = true;
    //     audio.play()
    //     vin.setAttribute("style", "animation-play-state: running;");

    //     // if(main){
    //     //     if(is_on){
    //     //         audio.pause()
                
    //     //         // this.setState({song_on: false})
    //     //         is_on = false
    //     //         vin.setAttribute("style", "animation-play-state: paused;")
    //     //         document.body.style.backgroundImage = "url('../Photos/resume.png')";
    //     //         // document.getElementById("main").src=back;

    //     //     }
    //     //     else{
    //     //         // this.setState({song_on: true})
    //     //         is_on = true;
    //     //         audio.play()
    //     //         vin.setAttribute("style", "animation-play-state: running;");
    //     //         // document.getElementById("main").src=back2;

                
    //     //     }
    //     // }
    //     // if(is_on){
    //     //     audio.pause()
            
    //     //     // this.setState({song_on: false})
    //     //     is_on = false
    //     //     vin.setAttribute("style", "animation-play-state: paused;")
    //     //     document.body.style.backgroundImage = "url('../Photos/resume.png')";
    //     //     // document.getElementById("main").src=back;

    //     // }
    //     // else{
    //     //     // this.setState({song_on: true})
    //     //     is_on = true;
    //     //     audio.play()
    //     //     vin.setAttribute("style", "animation-play-state: running;");
    //     //     // document.getElementById("main").src=back2;

            
    //     // }
    // }

    // forward = () => {
    //     // this.setState({song_on: false})
    //     is_on = false;
    //     index = (index + 1) % 4
    //     // this.setState({index: index % 3})
    //     audio.src = this.state.song_lst[index]
    //     this.play(index)
    //     // audio.play()


        
    // }

    // backward = () => {
    //     is_on = false;
    //     index = index - 1
    //     if(index < 0){
    //         index = 2
    //     }
    //     audio.src = this.state.song_lst[index]
    //     this.play(this.state.song_lst[index])

    
        
    // }

    // SetVolume = () => {
    //     var slider = document.getElementById("myRange1")
    //         this.setState({
    //           volume: slider.value / 100
    //         })
    //     audio.volume = slider.value / 100
    // }
    
    render() {
        return (
            <div className="elem">
                <img src={playbutt} onClick={this.onclick}/> <Typography variant="h5">{this.props.name}</Typography>
                
            </div>
        )
    }
}

// propTypes
record.propTypes = {
    name: PropTypes.string.isRequired
}

export default record
