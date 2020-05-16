import React, { Component } from 'react'
import "./record.css"
import playbutt from "../Photos/music.png"
import { PropTypes } from 'prop-types'
import Addplay from "../components/pick_box";

export class record extends Component {

    onclick = () =>{
        this.props.onClick()
    }
    
    render() {
        return (
                <div className="elem">
                    <img src={playbutt} onClick={this.onclick} alt="vinyl"/> 
                    <p>{this.props.name}</p>
                    <Addplay/>
                </div>
        )
    }
}

// propTypes
record.propTypes = {
    name: PropTypes.string.isRequired
}

export default record
