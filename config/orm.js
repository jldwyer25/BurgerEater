

//psuedocode and skeletons taken from cats activity - print question marks, obj to sql, and orm naming

var connection = require("../config/connection.js");
//TAKEN FROM cats Activity
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey') THIS IS FUNNY BC TRILOGY DOESNT KNOW ITS LANA DEL REY, AND SHE SO BAD
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
    
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      insertOne: function(table,cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += " )";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString +=") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"

      
        console.log(queryString);
    
        connection.query(queryString, id, function(err, result) {
          if (err) {
            throw err;
          }

          cb(result);
        });
      },
      
}

module.exports = orm;