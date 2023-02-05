//index.js is the main Routing file of the Issue Tracker Routing 
//loading express
const express = require("express");

//loading router from express
const router = express.Router();
//loading all the controllers required
const homeController = require("../controllers/home_controller");
const projectcontroller = require("../controllers/create_controller");
const projectidController = require("../controllers/project_id_controller");
//cheking if router loaded
console.log("router loded");
//for specific route specifc controller to handle 
router.get("/",homeController.home);
router.post("/create-project",projectcontroller.create_project);
router.get("/create-project-form",projectcontroller.create_project_form);
router.get("/create-issue-form",projectcontroller.create_issue_form);
router.post("/create-issue",projectidController.create_issue);
router.get("/project/:id",projectidController.projectProfile);

//exporting the router to be accessed at the MAIN index.js file 
module.exports = router;

