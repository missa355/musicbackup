import React from 'react'
import "./search.css"
import { Redirect } from 'react-router-dom'
import axios from "axios"
import Sample2 from "../Pages/search_layout/sample"
import {getFromStorage} from "../utils/storage"



export default function search() {
    // return <Redirect to='/login' />
    // const obj = getFromStorage('the_main_app');    
    // if (obj && obj.token){
    //     //verify token
    //     console.log("token not null")
    //     const token = {token: obj.token}

    //     // var status = true;
    //     axios.post("http://localhost:5000/verify", token)
    //     .then(res => localStorage.setItem("valid", JSON.stringify(res.data.Success)));
        
    //     if(JSON.parse(localStorage.getItem('valid')) === true){
    //             console.log("valid token")
    //             return (
    //                 <div>
    //                     <Sample2/>

    //                 </div>
    //                         );
    //     }


    // }
    return (
    //  <Redirect to='/login' />
        <div>
            <Sample2/>

        </div>

    );

}
