import React, { Component } from 'react'
import "./record.css"
import playbutt from "../Photos/music.png"
import { PropTypes } from 'prop-types'
import Addplay from "../components/pick_box";


export class record extends Component {

    onclick = () =>{
        // if(ind === 0){
        //     ind = 1
        // }
        // else if(ind === 1){
        //     ind = 0
        // }
        this.props.onClick()

    }
    
    render() {
        return (
                <div className="elem">
                    <img id={this.props.name} src={playbutt} onClick={this.onclick} alt="vinyl"/> 
                    <p>{this.props.name}</p>
                    <Addplay tid={this.props.TID} song={this.props.name}/>
                </div>
        )
    }
}

// propTypes
record.propTypes = {
    name: PropTypes.string.isRequired
}

export default record
