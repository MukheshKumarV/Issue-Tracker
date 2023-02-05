//loading the project and issue data base models
const Project = require("../models/project");
const Issue = require("../models/Issue");


//using a asyncronus function to find and fetch all the issues and projects and render them to home ejs file when requested
module.exports.home = async function(req, res){
    try {
        let projects = await Project.find({})
        let issues = await Issue.find({}).populate("projectName")
        res.render("home",{
            title:'Issue Tracker',
            project_list: projects,
            issue_list: issues
        });
    } catch (err) {
        console.log("Error in the Home Controller", err);
        return;
    }
};