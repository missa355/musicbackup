import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonToggle } from 'reactstrap';
import "./login.css"
import axios from "axios"
import {getFromStorage, setInStorage} from "../../utils/storage"
import { Redirect } from 'react-router-dom'
import Nav from "../side_burger"


export class login extends Component {
    state = {
        loggedin:false,
    }

    click = (e) => {
        e.preventDefault();
        const User = {
            Email:document.getElementById("Email").value, 
            Password:document.getElementById("password").value
        }
        //once logged in save the user token in local stroage
        axios.post("https://teaaurora.ngrok.io/signin", User) //this 
        .then(res =>  {
            // console.log('json',res.data);
            if(res.data.success){
                console.log("valid user. Token saved locally", res.data.success);
                setInStorage('the_main_app', {token: res.data.token});
                setInStorage('valid', {token: res.data.success});
                // this.setState({loggedin:true})
                window.location.reload();



            }
        })
            
        // })
        // window.location = '/';
    }
    render() {
        if(JSON.parse(localStorage.getItem('valid'))){
            return(<div><Redirect to="/search" /></div>)
        }
        return (
            <div id="login_div">
                <Nav></Nav>
                <div className="Login">
                <h1>Login in</h1>
                {/* <p>____________________________________________________________</p> */}
                <hr></hr>                
                <br/>
                <Form>
                    <h3>Email</h3> 
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Input type="email" name="email" id="Email" placeholder="Enter your Email..." />
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <h3>Password</h3>
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Input type="password" name="email" id="password" placeholder="Enter your Password..." />
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Button onClick={this.click} type="submit" color="primary" size="lg" block>Sign in</Button>
                </Form>

            </div>
                
            </div>
        )
    }
}

export default login
