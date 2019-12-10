var mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
    name: {type: String, required:true},
    alias: String, 
    image: {type: String},
    description: {type: String},
    githubUrl: String,
    tags: [{name: String, class: String}],
    imageSliders: [{type: String}],
    relatedProjects: [{name: String, link: String}],
    createAt: {type: Date},
    updatedAt: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);