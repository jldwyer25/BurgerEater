//Connection based on CATS activity 

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "fbnqnxehalrjog61",
    password: "gjsqfwmqdi9x1ihu",
    database: "b08eau7s7v1gf9ub"
  });

  // Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;