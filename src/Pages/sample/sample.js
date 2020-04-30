import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import track1 from "../../music/track1.mp3"
import track2 from "../../music/track2.mp3"
import track3 from "../../music/track3.mp3"
import track4 from "../../music/track4.mp3"
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "react-jinke-music-player/assets/index.css"
import Record from "../../components/record"
import "./sample.css"
import Nav2 from "../../components/nav2/nav2"
import Play from "../../components/play"


var curr_track = track1;
export default function Album() {

  return (
    <div>
      <Nav2 className="navbar"></Nav2>

      {/* <h1 id="playlist">Your Playlist</h1> */}
      <Play></Play>
      <div className="record">
          <Record name="Method man - Wu tang clan"/>
          <Record name="Windwaker - Legend of Zelda"/>
          <Record name="Blue night - midnight moon"/>
      </div>

        {/* <div className="main_player"></div> */}
    </div>
  );
}