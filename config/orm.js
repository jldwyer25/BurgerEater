// `selectAll()`
// * `insertOne()`
// * `updateOne()`

//psuedocode and skeletons taken from cats activity

var connection = require("../config/connection.js");


var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      update: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + "SET devoured=true WHERE id=" + condition+ ";", 
        function(err,result){
            if(err) throw err;
            cb(result);
        })

      },
      create: function(tableInput, condition, cb) {
          connection.query("INSERT INTO" + tableInput + "(burger_name) VALUES ('" + val + "');", function(err,result){
              if(err) throw err;
              cb(result);
          })
      }
      
}

module.exports = orm;