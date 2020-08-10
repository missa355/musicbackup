import React, { Component } from 'react'
import "./Header.css"
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Burger from "../side_burger"
import logo from "../../Photos/LogoMakr_64mdfG.png"
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';


export class Header extends Component {
    render() {
        return (
            <div className="Header_main_container">
                <div className="Header_left">
                    <Burger/>
                    <div className="logo">
                        <img src={logo} alt="frog"></img>
                    </div>
                </div>
                <div className="Header_center">
                <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                        id="filled-adornment-amount"
                        // value="SEARCH"
                        placeholder="Search..."
                        startAdornment={<InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>}
                    />
                    </FormControl>

               </div>
                <div className="Header_right">
                    <div id="settings" className="Header_right_child">
                        <SettingsIcon/>
                    </div>

                    <div id="notification" className="Header_right_child">
                    <Badge badgeContent={0} color="primary">
                        <MailIcon />
                    </Badge>
                    </div>
                    
                    <div id="avatar" className="Header_right_child">
                     <Avatar>N</Avatar>

                    </div>
                </div>

                
            </div>
        )
    }
}

export default Header
