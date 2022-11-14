let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' 
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('AboutMe', { title: 'About' 
    });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('Projects', { title: 'Projects' 
    });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('Services', { title: 'Services' 
    });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('ContactMe', { title: 'Contact Us' 
    });
}