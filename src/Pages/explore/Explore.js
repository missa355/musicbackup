import React, { Component } from 'react'
import Card from "../../components/media_card/media_card"
import Side from "../../components/side_burger"
import "./Explore.css"
import "nouislider/distribute/nouislider.css";
import {Link} from "react-router-dom"
import Fab from "../../components/Fab/Fab"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import Header from "../../components/Header/Header"



export class Explore extends Component {
    state = {
        playlist_info :[]
    }

    componentDidMount = () =>{
        if(JSON.parse(localStorage.getItem('valid') === false || localStorage.getItem('valid') === null)){
            return;
        }
        axios.get(`https://0c67bf6eec81.ngrok.io/playlist/user/${JSON.parse(localStorage.getItem('email'))}`)
        .then(res => {
            console.log(res.data[0])
            for(var i=0;i<res.data.length;i++){
                this.setState({playlist_info: [...this.state.playlist_info, [res.data[i].title,res.data[i].creator, res.data[i].PID] ]})
                // console.log(this.state.song_names)
            }
        }) 

    }
    render() {
        if(JSON.parse(localStorage.getItem('valid') === false || localStorage.getItem('valid') === null ||localStorage.length === 0)){
            return(<Redirect to="/login" />)
        }
        return (
            <div id="explore-background">
            <Fab/>

            <Header/>
            <div id="card_container">
                <div className="row_info">
                    <h3>To start with</h3>
                    <Link to="/explore"><p>SEE ALL</p> </Link>
                </div>
                <Card id="top" title='Top tracks.' creator="Zenyatta" clickable="none"/>
                <Card id="rise" title='On the rise.' creator="Zenyatta" clickable="none"/>
                <Card id="fave" title='Our Favorite' creator="Zenyatta" clickable="none"/>
                <Card id="lofi" title='Lofi' creator="Zenyatta" clickable="none"/>
                <Card id="hip" title='hip hop caviar' creator="Zenyatta" clickable="none"/>
                <Card id="classic" title='Classic music' creator="Zenyatta" clickable="none"/>
                <div className="row_info"><h3>
                    Your Playlists</h3>
                    <Link to="/explore"><p>SEE ALL</p> </Link>
                    </div>
                {this.state.playlist_info.map((block, i) => 
                            <Card key={i} creator ={block[1]} title={block[0]} pid={block[2]}/>
                )}

                
            </div>

            
        </div>
        )
    }
}

export default Explore
