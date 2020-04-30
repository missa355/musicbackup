import React from 'react'
import Play from "../../components/play"
import {getFromStorage} from "../../utils/storage"
import { Redirect } from 'react-router-dom'
import axios from "axios"


export default function land() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token){
        //verify token
        const token = {token:obj.token}
        console.log("token not null")

        // var status = true;
        axios.post("http://localhost:5000/verify", token)
        .then(res => localStorage.setItem("valid", JSON.stringify(res.data.Success)));
        
        if(localStorage.getItem('valid')){
                console.log("valid token")
                return (
        <div>
             <Redirect to='/search'/>


        </div>
                );
            }


    }
    return (
        <Play/>

    );

}
