const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vaLoginInfo = new Schema({
    Name:String,
    Registration_ID:String,
    Gender:String,
    Age:Number,
    Email:String,
    Phone_Number:Number,
    Address:String,
    user:String,
    profile:String,
    certificate:String
});

module.exports = mongoose.model('loginInfo', vaLoginInfo);
