# BurgerEater

This is a MySQL/Node Handlebars application, along with JawsDB from Heroku to create a persistent, living database. 

The user is presented with burgers that they may or may have not eaten before, an input box to add burgers, and a button next to each entry that says "EAT IT!". Eating the burger causes it to be displayed in a different area, greyed out to indicate that this is a burger of meals past.

# How it Works

This app utilizes express pathwork, MySQL, and node.js with the handlebars MVC. Using the connection.js and orm.js as listeners to establish connections to both the database and the internet, I built the ground floor of the server. Exporting the functions defined in the orm.js allows the model to call on those functions, and then the burgers_controller to execute and redirect. The handlebars pages allow data input by the user or passed from the connections to share the same data-type and data-names to be called upon and manipulated. 

# Acknowledgements

ZGarcia, RMinor, ABellinger, PLoy
