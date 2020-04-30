import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./nav.css"


export class nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link className="Link" to="/login"> Sing in </Link>
                <Link className="Link" to="/signup">Sign up</Link>
            </div>
        )
    }
}

export default nav
