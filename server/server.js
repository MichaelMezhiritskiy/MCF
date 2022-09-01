const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./userController');
require('dotenv').config();

mongoose.connect(process.env.URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'MFCUserData',
  })
    .then(() => console.log('Connected to Mongo DB: '))
    .catch((err) => console.log(err));
  

app.use(express.json()); //must have to send json post requests

app.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user);
})

// `/login:?username=${username}&password={password}`
app.get('/login', userController.verifyLogin, (req, res) => {
    return res.status(200).json(res.locals.exists);
});

app.delete('/login', userController.deleteUser, (req, res) => {
  return res.status(200).json(res.locals.user);
}); 

app.post('/storeFavs', userController.addCrypto, (req, res) => {
    return res.status(200).json(res.locals.user);
});

app.get('/storeFavs', userController.getFavorites, (req, res) => {
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


