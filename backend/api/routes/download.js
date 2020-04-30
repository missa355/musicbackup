const router = require('express').Router();
var ms = require('mediaserver');




// gloval variable songname

router.route('/').post((req, res) => {

});



router.route('/:name').get((req, res) => {
    var name =req.params.name
    console.log(name)
    const file = `${__dirname}/upload_files/${name}` + `.mp3`;
    console.log(file)
    ms.pipe(req, res, file);

});


module.exports = router;