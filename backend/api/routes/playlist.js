const router = require('express').Router();
//creating Recipe object by requiring class
let Playlist = require('../models/playlist');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').get((req, res) => {
    Playlist.find()
    .then(playlist => res.json(playlist))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add_playlist').post((req, res) => { //if localhost:5000/add is called
  const PID = req.body.PID;
  const CID = req.body.CID;
  const Songs = req.body.Songs;



  const newPlaylist = new Playlist({PID, CID, Songs});

  newPlaylist.save() //saves the recipe(which was made into proper form) in the mongodb database
    .then(() => res.json('Playlist  added!'))
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

// router.route('/add_song').post((req, res) => {
//     Playlist.findByIdAndUpdate(req.params.play_id, { $push: { Songs: req.params.Songs }})
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
module.exports = router;