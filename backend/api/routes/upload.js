var multer = require('multer')
const router = require('express').Router();




router.route('/').post((req, res) => {
  var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, __dirname + "/upload_files")
    },
      filename: function (req, file, cb) {
      cb(null, file.originalname.toLowerCase().split(" ").join(""))

      // cb(null, Date.now() + '-' +file.originalname)
    }
  })
  var upload = multer({ storage: storage }).single('myfile')  

  upload(req, res, function (err) {
    // console.log( req.body.new_file_name );

    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
  return res.status(200).send(req.file)

}) 
});


module.exports = router;