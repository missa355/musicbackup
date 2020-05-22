const router = require('express').Router();
//creating Recipe object by requiring class
let Track = require('../../models/Track');


//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').get((req, res) => {
  Track.find()
    .then(tracks => res.json(tracks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Track.find({CID: req.params.id})
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => { //if localhost:5000/add is called
  console.log("adding track stage 1")
  const Name = req.body.name.split(".")[0];
  const TID = req.body.TID
  const Url = __dirname + "/upload_files/" + req.body.TID
  const CID = req.body.CID


  console.log(Name, TID, Url, CID)

  if(!Name) {return res.end({'success':false , 'issue': 'Track has no name'})};
  if(!TID) {return res.end({'success':false , 'issue': 'There is no TID'})};
  if(!Url) {return res.end({'success':false , 'issue': 'There is no link'})};
  if(!CID) {return res.end({'success':false , 'issue': 'There is no creator'})};



  const newTrack = new Track({Name, TID, Url, CID});

  newTrack.save() //saves the recipe(which was made into proper form) in the mongodb database
    .then(() => res.json('Track added!'))
    .catch(err => res.status(400).json('Error: ' + err));
 });
module.exports = router;