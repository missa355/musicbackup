const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        default: ''
    },
    Lastname: {
        type: String,
        default: ''
    },
    Email: {
        type: String,
        default: ''
    },
    Password: {
        type: String,
        default: ''
    },
    isDeletd: {
        type: Boolean,
        default: false
    }
});

// Password related configurations

//creates a new funnction for out object user
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
};
// end of password related configs

module.exports = mongoose.model('User', UserSchema);