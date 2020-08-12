import React, { Component } from 'react'
import "./play.css"
import {setInStorage} from "../utils/storage"
import axios from "axios"
import Header from "../components/Header/Header"


// var volume = 0.1
export class play extends Component {
    
    demo = (e) => {
        e.preventDefault();
        const User = {
            Email:"test@hotmail.com", 
            Password:"12345678"
        }
        //once logged in save the user token in local stroage
        axios.post("https://0c67bf6eec81.ngrok.io/signin", User) //this 
        .then(res =>  {
            // console.log('json',res.data);
            if(res.data.success === true){
                console.log("valid user. Token saved locally", res.data.success);
                setInStorage('the_main_app', {token: res.data.token});
                setInStorage('valid', {token: res.data.success});
                setInStorage('name', res.data.name);
                setInStorage('email', res.data.email);

                // this.setState({loggedin:true})
                setTimeout(()=>{window.location.reload();
                }, 1000)
            }
            else{   
                console.log(res.data.success)

            }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="land_page_back">
                    <h1 id="landing_title">Sound Frog</h1>
                    <h2 id="landing_subtitle">Music side of things</h2>
                    <button onClick={this.demo} id="music_demo">Check it out!</button>
                    
                    <h1 id="podcast_landing_title">Or</h1>

                    <h1 id="podcast_landing_title">Frog Cast</h1>
                    <h2 id="podcast_landing_subtitle">PodCast side of things</h2>
                    <button onClick={this.demo} id="podcast_demo">Check it out!</button>


                </div>
            </div>
        )
    }
}

export default play
