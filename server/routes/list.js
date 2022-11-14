let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with book model

let List = require('../models/list');
let listController = require('../controller/list');

// CRUD OPS

// read op
// get route for book list

router.get('/', listController.displayToDoList);

// CREATE OP or ADD OP
// get route for displaying add page -- create op
router.get('/add', listController.displayAddPage);
// post route for processing the add page
router.post('/add', listController.processAddPage);



//Edit op or UPDATE op
// get route for edit page -- edit op
router.get('/edit/:id', listController.displayEditPage);           


//Post route for displaying the edit op
router.post('/edit/:id', listController.processEditPage);           



//DELETE OP
// get route for delete page -- delete op           
router.get('/delete/:id', listController.performDelete);           
																																																																																																																																																														

module.exports=router;