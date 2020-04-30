const router = require('express').Router();
//creating Recipe object by requiring class
let Usersession = require('../..//models/Usersession');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').post((req, res, next) => {
    const token = req.body.token;
    Usersession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if(err){
            return res.send({Success:false, message:"Server Issue"});
        }
        if(sessions.length !== 1){
            return res.send({Success: false, message:"Invalid"})
        }
        else{
            return res.send({Success: true, message:"valid"})
        }
        
    })

});

module.exports = router;