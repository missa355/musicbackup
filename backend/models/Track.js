const mongoose = require('mongoose');

const Track = new mongoose.Schema({
    Name: {
        type: String,
        default: ""
    },
    TID: {
        type: String,
        default: ""
    },
    Url:{
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Track', Track)