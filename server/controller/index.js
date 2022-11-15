let express = require('express');
let router = express.Router();

//Different modules controlling the routing between pages

//home page controller
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' 
    });
}

//about page controller           
module.exports.displayAboutPage = (req, res, next) => {
    res.render('AboutMe', { title: 'About' 
    });
}


//projects page controller           
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('Projects', { title: 'Projects' 
    });
}


//Services page controller
module.exports.displayServicesPage = (req, res, next) => {
    res.render('Services', { title: 'Services' 
    });
}

//contact page controller
module.exports.displayContactPage = (req, res, next) => {
    res.render('ContactMe', { title: 'Contact Us' 
    });
}