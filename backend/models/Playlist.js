const mongoose = require('mongoose');

const Playlist = new mongoose.Schema({
    PID: { //playlist ID that is used in localhost:3000/playlists/PID 
        type: String,
        default: ""
    },
    CID:{ //ID of creator
        type: String,
        default: ""
    },
    title:{
        type: String
    },
    creator:{
        type: String
    },
    Song_names:[{type: String}],
    
    Song_tids:[{type: String}]


    
});

module.exports = mongoose.model('Playlist', Playlist)