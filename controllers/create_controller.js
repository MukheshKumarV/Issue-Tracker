//loading the Project model (database model)
const Project = require("../models/project");

//create project form controller renders the form ejs file when requested
module.exports.create_project_form = function (req,res) {
    try {
         res.render("create_project");        
    } catch (err) {
        console.log("Error in the Project Controller", err);
        return;
    }
};

//create issue form controller renders the form ejs file when requested
module.exports.create_issue_form = function (req,res) {
    try {
        res.render("create_issue");        
    } catch (err) {
        console.log("Error in the issue Controller", err);
        return;
    }
};


//create project controller creates a new project with the deatiles given in form , accessing then using body parser
// using craete function new project is crated and the result is console loged
//after successful creation the user is redirected to home page
module.exports.create_project = function (req,res) {
     try {
        Project.create({
            projectName:req.body.name,
            projectDescription:req.body.description,
            projectAuthor:req.body.author,
            projectLabel:req.body.label,
        },function (err, newProject) {
            if(err){
                console.log('Error in creating Project',err);
                return;
            }
            console.log("Created the new Task");
            return res.redirect("/");
            
        });
    } catch (err) {
        console.log("Error in the Project Controller", err);
        return;
    }
};