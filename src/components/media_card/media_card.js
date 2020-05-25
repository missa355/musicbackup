import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "./media_card.css"

export class media_card extends Component {
    render() {
        return (
            <div>
                <Link to={`/playlist/${this.props.pid}`} style={{ pointerEvents:this.props.clickable}}>
                    <div id="outer">
                        <div id="inner"></div>   
                        <h4>{this.props.title}</h4>     
                        <p>{this.props.creator}</p>     
                    </div>
                </Link>
            </div>
        )
    }
}

export default media_card
