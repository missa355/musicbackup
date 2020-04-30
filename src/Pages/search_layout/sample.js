import React from 'react';
import "react-jinke-music-player/assets/index.css"
import "./sample.css"
import Play2 from "../../components/playsearch/play2"


export default function Album() {

  return (
    <div>
      {/* <Nav2 className="navbar"></Nav2> */}

      {/* <h1 id="playlist">Your Playlist</h1> */}
      <Play2></Play2>
        {/* <div className="main_player"></div> */}
    </div>
  );
}