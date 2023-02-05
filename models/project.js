//this is a mongo DB schema creation js file
//loading mongoose to create a schema
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String
    },
    projectDescription:{
        type:String
    },
    projectAuthor:{
        type:String
    },
    projectLabel:{
        type:String
    }
});

//assgining a variable to the schema
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;