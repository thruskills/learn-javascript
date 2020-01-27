const mongoose = require('mongoose')
const {Schema} = require('mongoose')

var ProjectSchema = new Schema({
    title: String,
    description: String,
    image: String,
    link: String
});

module.exports = mongoose.model('project', ProjectSchema);