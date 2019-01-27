//sets up express package
var express = require('express');
//sets up the routing ability of express? Maybe? Need clarity
var router = express.Router();
//imports burger.js now that it's written
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

router.post('/api/burgers', function(req,res){
    burger.insert([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    })
})

//links the update 
router.put('/api/burgers/:id', function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result)  {
        if(result.changedRows = 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



//as well as importing needs, lines 6&7 need this to be exported
module.exports = router;