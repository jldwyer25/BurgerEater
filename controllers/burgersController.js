//sets up express package
var express = require('express');
//sets up the routing ability of express? Maybe? Need clarity
var router = express.Router();
//imports burger.js now that it's written
var burger = require('../models/burger.js')

//lets the virtual path be established
router.get('/', function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');
    })
})

//links the update 
router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect('/');
    })
})

//as well as importing needs, lines 6&7 need this to be exported
module.exports = router;