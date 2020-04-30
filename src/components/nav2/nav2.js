import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./nav2.css"


export class nav2 extends Component {
    render() {
        return (
            <div className="navbar">
                <Link className="Link" to="/"> Home </Link>
                <Link className="Link" to="/login"> Sing in </Link>
                <Link className="Link" to="/signup">Sign up</Link>
            </div>
        )
    }
}

export default nav2
