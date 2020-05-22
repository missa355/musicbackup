import React from 'react';
import clsx from 'clsx';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PublishIcon from '@material-ui/icons/Publish';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Account_logos = [<LockOpenIcon/>,<CreateIcon/>]
const General_logos = [<HomeIcon/>, <SearchIcon/>, <PlaylistPlayIcon/>, <LiveHelpIcon/>, <SettingsIcon/>, <ContactMailIcon/>]
const creators_logos = [<PublishIcon/>, <ShowChartIcon/>, <ContactMailIcon/>]
const path_lst_1 = ["/login", "/signup"]
const path_lst_2 = ["/", "/Search", "/Search", "/", "/", "/"]
const path_lst_3 = ["/upload", "/garage", "/"]


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const logout = () =>{
  localStorage.clear()
  console.log("logged out")
  window.location.reload();
}

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem><h3>Account</h3></ListItem>
        {['Sign in','Create account'].map((text, index) => (
          <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to = {path_lst_1[index]}><ListItem button key={text}>
            <ListItemIcon>{Account_logos[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem><h3>General</h3></ListItem>

        {['Home', 'Search', 'Playlists', 'FAQ', 'Settings', 'Support'].map((text, index) => (
          <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to = {path_lst_2[index]}><ListItem button key={text}>
            <ListItemIcon>{General_logos[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>

      <List>
        <ListItem><h3>For Creators</h3></ListItem>

        {['Upload', 'Uploaded music', 'Contact'].map((text, index) => (
           <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to = {path_lst_3[index]}><ListItem button key={text}>
            <ListItemIcon>{creators_logos[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
    </div>
  );

  //=====================
  const singed_in = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem><h3>Account</h3></ListItem>
          <ListItem>
          <ListItemIcon><PersonIcon/></ListItemIcon>
          <ListItemText>{JSON.parse(localStorage.getItem('name'))}</ListItemText>
          </ListItem>
          <ListItem button onClick={() => logout()}>
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <ListItemText>Logout</ListItemText>
          </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem><h3>General</h3></ListItem>

        {['Home', 'Search', 'Playlists', 'FAQ', 'Settings', 'Support'].map((text, index) => (
          <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to = {path_lst_2[index]}><ListItem button key={text}>
            <ListItemIcon>{General_logos[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>

      <List>
        <ListItem><h3>For Creators</h3></ListItem>

        {['Upload', 'Uploaded music', 'Contact'].map((text, index) => (
           <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to = {path_lst_3[index]}><ListItem button key={text}>
            <ListItemIcon>{creators_logos[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
    </div>
  );

  if(JSON.parse(localStorage.getItem('valid'))){
    return(    
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ color: 'white' }} fontSize="large"></MenuIcon> </Button>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {singed_in('left')}
      </SwipeableDrawer>
  
</div>)
  }

  return (
    <div>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ color: 'white' }} fontSize="large"></MenuIcon> </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
      
    </div>
  );
}