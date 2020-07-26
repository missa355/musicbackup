import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonToggle } from 'reactstrap';
import "./signup.css"
import axios from "axios"
import {Link} from "react-router-dom"
import {getFromStorage, setInStorage} from "../../utils/storage"
import { Redirect } from 'react-router-dom'
import Nav from "../nav2/nav2"
import Burger from "../side_burger"



export class signup extends Component {

    click = (e) => {
        e.preventDefault()
        const User = {
            Firstname:document.getElementById("fname").value,
            Lastname:document.getElementById("lname").value,
            Email:document.getElementById("Email").value, 
            Password:document.getElementById("password").value,
            isDeleted: false
            }
        
        axios.post("https://0c67bf6eec81.ngrok.io/signup/add", User) //this 
        .then(res => console.log(res.data)); 

        //================
        const singup_user = {
            Email:document.getElementById("Email").value, 
            Password:document.getElementById("password").value
        }
        //once logged in save the user token in local stroage
        axios.post("https://0c67bf6eec81.ngrok.io/signin", singup_user) //this 
        .then(res =>  {
            // console.log('json',res.data);
            if(res.data.success === true){
                console.log("valid user. Token saved locally", res.data.success);
                setInStorage('the_main_app', {token: res.data.token});
                setInStorage('valid', {token: res.data.success});
                setInStorage('name', res.data.name);
                setInStorage('email', res.data.email);

                // this.setState({loggedin:true})
                window.location.reload();
            }
            else{   
                console.log(res.data.success)

            }
        })
            
        // window.location = '/';
    }
    render() {
        if(JSON.parse(localStorage.getItem('valid'))){
            return(<div><Redirect to="/search" /></div>)
        }
        // return <Redirect to='/target' />
        return (
            <div>
                {/* <Nav></Nav> */}
                <Burger></Burger>
                <div className="signup">
                <h1>Signup</h1>
                {/* <p>____________________________________________________________</p> */}
                <hr></hr>                
                <br/>
                <Form>
                    <h3>Name</h3>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input className="input_block" type="text" name="fname" id="fname" required placeholder="First name..." />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input className="input_block" type="text" name="lname" id="lname" required placeholder="Last name..." />
                            </FormGroup>
                        </Col>
                    </Row>
                    <h3>Email</h3> 
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Input type="email" className="input_block" name="email" id="Email" required placeholder="Enter your Email..." />
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <h3>Password</h3>
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Input type="password" className="input_block" name="email" id="password" required placeholder="Enter your Password..." />
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Button id="login_butt" onClick={this.click} className="input_block" color="primary" type="submit"  size="lg" block>Sign up</Button>

                </Form>

            </div>
                
            </div>
        )
    }
}

export default signup
