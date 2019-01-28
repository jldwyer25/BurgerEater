//sets up express package
var express = require('express');
//sets up the routing ability of express? Maybe? Need clarity
var router = express.Router();
//imports burger.js now that it's writtens
var burger = require('../models/burger.js');

//lets the virtual path be established
router.get('/', function(req, res){
    burger.all(function(burger_data){
        var hbsObject = {
            burgers: burger_data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/burgers/create', function(req,res){
    burger.insert([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(data){
        res.redirect('/');
    });
})

//links the update 
router.put('/api/burgers/:id', function(req, res){
    var id = req.params.id;

    burger.update(id, function (){
        res.redirect("/");
    })
});



//as well as importing needs, lines 6&7 need this to be exported
module.exports = router;