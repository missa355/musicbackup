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
        
        axios.post("http://localhost:5000/signup/add", User) //this 
        .then(res => console.log(res.data)); 
            
        // window.location = '/';
    }
    render() {
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
                    <Button onClick={this.click} className="input_block" type="submit"  size="lg" block>Sign up</Button>

                </Form>

            </div>
                
            </div>
        )
    }
}

export default signup
