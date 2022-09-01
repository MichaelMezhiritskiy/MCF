const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userController = require('./userController');



mongoose.connect('mongodb+srv://Mike-Mezh:michaelmezh123@mfcuserproject.upire0r.mongodb.net/?retryWrites=true&w=majority', { //change pw and check in tomorrow
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'MFCUserData',
  })
    .then(() => console.log('Connected to Mongo DB: '))
    .catch((err) => console.log(err));
  


// app.use('/build', () => express.static(path.join(__dirname, '../build')));
app.use(express.json()); //must have to send json post requests

app.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user);
})
//www.yoursite.com?myparam1={id1}&myparam2={id2}
// `/login:?username=${username}&password={password}`
app.get('/login', userController.verifyLogin, (req, res) => {
    return res.status(200).json(res.locals.user)
});

app.post('/storeFavs', userController.addCrypto, (req, res) => {
    return res.status(200).json(res.locals.user);
});

app.get('/storeFavs', userController.getFavorites, (req, res) => {
  console.log('in the server.js file: ', res.locals.userFavorites);
  return res.status(200).json(res.locals.userFavorites);
});

app.get('/', (req, res) => {
    return res.status(200).send('WE MADE IT');
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000, () => console.log('Server listening on port: 3000'));

//setup schema, database, learn react router to setup a login and signup page
//1. login and signup page with react router
//setup DB
//connect DB to backend
//create and test user login routes
