const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vaSchema = new Schema({
    profile:String
});

module.exports = mongoose.model('crousel', vaSchema);
