let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm install mongoose --save

//connect with book model
let List = require('../models/list');
// CRUD OPERATIONS

module.exports.displayToDoList = (req, res, next) => {  
    List.find((err, todolist) => {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            res.render('list/list', {
                title:"To-Do List", 
                ToDoList: todolist
            })
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('list/add', {title:'New Item'})
};

module.exports.processAddPage = (req, res, next) => {
    let newItem = List ({
        "item":req.body.item,
        "description":req.body.description,
        "when":req.body.when,
        
    })
    List.create(newItem, (err, list) => {
        if(err) {
            console.log(err)
            res.end(err)
        } 
        else 
        {
            res.redirect('/show-list')
        }
    })

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    List.findById(id, (err,ItemToEdit) => {
        if (err) {
            console.log(err)
            res.end(err)
        } else {
            res.render('list/edit', {title: 'Edit Item', list: ItemToEdit});
        }
    })

}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateItem = List({
        "_id": id,
        "item":req.body.item,
        "description":req.body.description,
        "when":req.body.when,
    })
    List.updateOne({_id: id}, updateItem, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {           
            res.redirect('/show-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    List.deleteOne({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {           
            res.redirect('/show-list');
        }
    });       
           
}