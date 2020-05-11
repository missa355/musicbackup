import React from 'react'
import Card from "../../components/media_card/media_card"
import Side from "../../components/side_burger"
import "./Explore.css"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import {Link} from "react-router-dom"
import Fab from "../../components/Fab/Fab"



export default function Explore() {
    return (
        <div id="explore-background">
            <Fab/>

            <Side/>
            <div id="card_container">
                <div className="row_info">
                    <h3>To start with</h3>
                    <Link to="/explore"><p>SEE ALL</p> </Link>
                </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <div className="row_info"><h3>Your Playlists</h3></div>
                <Card/>
                <Card/>
                
            </div>

            
        </div>
    )
}
