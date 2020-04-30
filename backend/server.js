const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');




require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.set('view engine', 'hbs');


// app.use(fileUpload({
//   createParentPath: true
// }));

// //add other middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// This is where the apis are used
const signinRouter = require('./api/routes/signin');
app.use('/signin', signinRouter);
//  "/signup" => localhost:5000/signup
const signupRouter = require('./api/routes/signup');
app.use('/signup', signupRouter);
const verifyRouter = require('./api/routes/verify');
app.use('/verify', verifyRouter);
const logoutRouter = require('./api/routes/logout');
app.use('/logout', logoutRouter);

const uploadRouter = require('./api/routes/upload');
app.use('/upload', uploadRouter);

const trackRouter = require('./api/routes/Track');
app.use('/track', trackRouter);

const downloadRouter = require('./api/routes/download');
app.use('/download', downloadRouter);


//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format



// ------------------------------------
// app.post('/submitform', (req, res) => {
//   new formidable.IncomingForm().parse(req, (err, fields, files) => {
//     if (err) {
//       console.error('Error', err)
//       throw err
//     }
//     console.log('Fields', fields)
//     console.log('Files', files)
//     for (const file of Object.entries(files)) {
//       console.log(file)
//     }
//   })
// })
// --------------------------------------

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});