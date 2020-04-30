import React, { Component } from 'react'
import play from "../../Photos/play.png"
import next from "../../Photos/play-next-button.png"
import backbtn from "../../Photos/back.png"
import track1 from "../../music/track1.mp3"
import track2 from "../../music/track2.mp3"
import track3 from "../../music/track3.mp3"
import track4 from "../../music/track4.mp3"
import Record from "../record"


import "./bottom_player.css"

export class bottom_player extends Component {
    
    play = () => {
        console.log("play button pressed");

    }

    render() {
        return (
            <div>

                <div className="right_block">
                    <h3>Music playlist</h3>
                    {/* <img src={backbtn} alt="next button" id="backbtn"/>
                    <img src={play} alt="play button" id="play"/>
                    <img src={next} alt="next button" id="next"/> */}
                    <Record onClick={this.play} name="Dudley Theme Song - might night" className="record"/> 
                    <Record onClick={this.play} name="Windwaker - Zelda Orcheastra" className="record"/> 
                    <Record onClick={this.play} name="Method Man - WuTang Clan" className="record"/>
                    <Record onClick={this.play} name="MoonNight" className="record"/> 
                    <Record onClick={this.play} name="Back to Back" className="record"/> 
                    <Record onClick={this.play} name="Momma said knock you out" className="record"/>
                </div>
                <div className="bottom_block">
                    <audio src={track1} id="main_player" controls />
                    <button id="backbtn">Previous</button>
                    <button id="next">Next</button>
                    <button id="play">play</button>
                </div>
            </div>
        )
    }
}

export default bottom_player
