import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "./media_card.css"

export class media_card extends Component {
    render() {
        return (
            <div>
                <Link to="/search">
                    <div id="outer">
                        <div id="inner"></div>   
                        <h4>DAMN.</h4>     
                        <p>Kendric Lamar</p>     
                    </div>
                </Link>
            </div>
        )
    }
}

export default media_card
