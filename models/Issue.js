//this is a mongo DB schema creation js file
//loading mongoose to create a schema
const mongoose = require("mongoose");
const Project = require("../models/project");

const issueSchema = new mongoose.Schema({
    issuetitle:{
        type:String
    },
    issueDescription:{
        type:String
    },
    issueAuthor:{
        type:String
    },
    projectName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    issueLabel:{
        type:String
    }
});

//assgining a variable to the schema
const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;