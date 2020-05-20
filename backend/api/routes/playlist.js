const router = require('express').Router();
//creating Recipe object by requiring class
let Playlist = require('../../models/Playlist');

//this get request dtermines the playlist to actually create as a route (locahost:3000/playlist/PID)
router.route('/').get((req, res) => {
    Playlist.find()
    .then(playlist => res.json(playlist))
    .catch(err => res.status(400).json('Error: ' + err));
});
// adds a newly created playlist to the DB
router.route('/add').post((req, res) => { //if localhost:5000/add is called
  const PID = req.body.PID;
  const CID = req.body.CID;
  const title = req.body.Title;
  const creator = req.body.creator;
  const Songs = []; //defualt value of a new playlist
  const tids = []



  const newPlaylist = new Playlist({PID, CID, title, creator, Songs, tids});
  console.log(newPlaylist)

  newPlaylist.save() //saves the recipe(which was made into proper form) in the mongodb database
    .then(() => res.json('Playlist added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//uniqley dtermines the content of a certain playlist
router.route('/:id').get((req, res) => {
    // console.log(req.params.id)
    Playlist.find({PID:req.params.id})
    .then(recipes => {
        // console.log(recipes)
        res.json(recipes)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add_track_to_playlist').post((req, res) => {
    // console.log(req.params.id)
    var Song = req.body.track;
    Playlist.findOneAndUpdate({PID: req.body.PID}, {$push: {Song_names: Song, Song_tids: req.body.tid}})
    .then(() => res.json('Song added to Playlists!'))
    .catch(err => res.status(400).json('Error: ' + err));

});
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