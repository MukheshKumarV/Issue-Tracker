//loading the data base models project and issue
const Project = require("../models/project");
const Issue = require("../models/Issue");
//creating a variable to know  which project has been asked and to which project the issue to be created
var project_id ;

//project profile renders the requested project using the project id and all the issues where further filter will be done at the ejs file
module.exports.projectProfile = async function(req, res){
    let issues = await Issue.find({})
        .sort('-createdAt')
        .populate('projectName')
    Project.findById(req.params.id, function(err,project){
        project_id = req.params.id;
        return res.render('project_profile', {
            title: 'Project Profile',
            profile_project: project,
            issue_list: issues
        });
    });
};


//create issue controller creates a new issue with given information from form through body parser
module.exports.create_issue = function (req,res) {
     try {
        Issue.create({
            issuetitle:req.body.name,
            projectName:project_id,
            issueLabel:req.body.label,
            issueDescription:req.body.description,
            issueAuthor:req.body.author            
        },function (err, newIssue) {
            if(err){
                console.log('Error in creating Issue',err);
                return;
            }
            console.log("Created the new Issue");
            return res.redirect("/");            
        });        
    } catch (err) {
        console.log("Error in the Issue Controller", err);
        return;
    }
};

