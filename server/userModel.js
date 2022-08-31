const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Mike-Mezh:mikemezh123@cluster0.jqe2o95.mongodb.net/?retryWrites=true&w=majority';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const MFCuser = mongoose.model('MFCusers', userSchema);

 module.exports = MFCuser;


