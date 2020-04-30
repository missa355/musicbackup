const router = require('express').Router();
let Usersess = require("../../models/Usersession")
//creating Recipe object by requiring class
let User = require('../../models/User');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').post((req, res) => {
  const email = req.body.Email;
  const Password = req.body.Password;
  // res.send({email: email, pass: Password});
  User.find({Email: email}, (err, users) =>  {
    if(err) {return res.send({sucess:"fail", message:"server issue"})}
    if(users.length !== 1) {return res.send({sucess:"fail", message:"no unique user"})}
    const user = users[0]
    // res.send({user:user})
    //case1: wrong passwrod (checked by bcrypt)
    if(!user.validPassword(Password)){return res.send({sucess:"fail", message:"Invlaid  password"})}
    //case2: valid password 
    //create a user session for the person implying that they arae logged in 
    if(user.validPassword(Password)){
      const usersession = new Usersess()
      usersession.UserId = user._id ; //document id in DB
      usersession.save((err, doc) => {
        if (err) {return res.send({sucess:false, message:"Invalid"})}
        // create an object thay relates a usersession and user by token(token points to a doc the holds and id that points to an associates user)
        return res.send({success: true, message: "valid sign in", token:doc._id})  
      })
    }

  })

});

// router.route('/add').post((req, res) => { //if localhost:5000/add is called
//   // const firstname = req.body.firstname;
//   // const Lastname = req.body.Lastname;
//   const Email = req.body.Email;
//   const Password = req.body.Password;
//   const isDeleted = req.body.isDeleted;

//   const newUser = new User({Email, Password, isDeleted});

//   newUser.save() //saves the recipe(which was made into proper form) in the mongodb database
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//  });

// router.route('/:id').get((req, res) => {
//   Recipe.findById(req.params.id)
//     .then(recipes => res.json(recipes))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Recipe.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Recipe deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Recipe.findById(req.params.id)
//     .then(recipes => {
//       recipes.recipename = req.body.recipename;
//       recipes.comp = req.body.comp;
//       recipes.choose = req.body.choose;
//       recipes.Rating = Number(req.body.Rating);
//       recipes.description = req.body.description;

//       recipes.save() //This part actually updates the data
//         .then(() => res.json('Recipe updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
module.exports = router;