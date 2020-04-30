import React, { Component } from 'react'
import "./forward.css"
export class forward extends Component {
    click = () =>{
        this.props.onClick()
    }
    render() {
        return (
            <div className="forward" onClick={this.click}>
                
            </div>
        )
    }
}

export default forward
