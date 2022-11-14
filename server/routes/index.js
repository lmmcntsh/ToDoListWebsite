var express = require('express');
var router = express.Router();
let indexController = require('../controller/index')
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page pt.2 */
router.get('/home', indexController.displayHomePage);


/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
