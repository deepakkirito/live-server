const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vaLoginSchema = new Schema({
    userName:String,
    passWord:String
});

module.exports = mongoose.model('login', vaLoginSchema);