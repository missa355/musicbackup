const router = require('express').Router();
//creating Recipe object by requiring class
let UserSession = require('../..//models/Usersession');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').get((req, res) => {
    const token = req.body.token;
    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
      }, {
        $set: {
          isDeleted:true
        }
      }, null, (err, sessions) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Good'
        });
      });
    });

module.exports = router;