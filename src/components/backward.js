import React, { Component } from 'react'
import "./backward.css"
export class backward extends Component {
    click = () =>{
        this.props.onClick()
    }
    render() {
        return (
            <div className="backward" onClick={this.click}>
                
            </div>
        )
    }
}

export default backward
