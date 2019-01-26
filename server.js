//NPM Packages needed
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
//==========PORT ESTABLISHED======================================================
var PORT = process.env.PORT || 3000;
//==========ROUTES IMPORTED FROM CONTROLLER PAGE======================================================
var routes = require('./controllers/burgersController')

//saves express functionality as a variable. Still iffy on how it becomes a dot-operator that works so strong
var app = express();
app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'));
//parses the body and is FALSE as to whether or not the data is encrypted - maybe? using brain power
app.use(bodyParser.urlencoded({ extended: false}));

//calls method-override as established above, unsure why it has the same syntax as __dirjoin
app.use(methodOverride('_method'));

//makes the handlebars engine initiate
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//helps me know if the server is live or dead.
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });

app.use('/',routes);