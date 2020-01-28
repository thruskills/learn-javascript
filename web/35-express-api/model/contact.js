const mongoose = require('mongoose')
const {Schema} = require('mongoose')

var ContactSchema = new Schema({
    name: String,
    mobile: String,
    email: String,
    message: String,
    date_created: Date,
    date_modified: {type: Date, default: Date.now}
});

module.exports = mongoose.model('contact', ContactSchema);