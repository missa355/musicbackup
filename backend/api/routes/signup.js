const router = require('express').Router();
//creating Recipe object by requiring class
let User = require('../..//models/User');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { //if localhost:5000/add is called
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Email = (req.body.Email).toLowerCase();
  const Password = req.body.Password;
  const isDeleted = req.body.isDeleted;
  console.log(Firstname, Email)

  if(!Firstname) {return res.end({'success':false , 'issue': 'Firstname Cannot be blank'})};
  if(!Lastname) {return res.end({'success':false , 'issue': 'Lastname Cannot be blank'})};
  if(!Email) {return res.end({'success':false , 'issue': 'Email Cannot be blank'})};
  if(!Password) {return res.end({'success':false , 'issue': 'Password Cannot be blank'})};

  const newUser = new User({Firstname, Lastname, Email, Password, isDeleted});
  newUser.Password = newUser.generateHash(Password)

  newUser.save() //saves the recipe(which was made into proper form) in the mongodb database
    .then(() => res.json('user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
 });

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