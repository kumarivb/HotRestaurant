// DEPENDENCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express server
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets up the Express app to handle data parsing
// =============================================================
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});