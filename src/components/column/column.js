import React, { Component } from 'react'
import "./column.css"

export class column extends Component {
    render() {
        return (
            <div>
                <div className= "left_column">
                    <ul>
                        <li>Home</li>
                        <li>Library</li>
                        <li>Add your music</li>
                    </ul>

                </div>
                
            </div>
        )
    }
}

export default column
