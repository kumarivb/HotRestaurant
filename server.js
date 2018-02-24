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

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "html/home.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "html/reserve.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "html/tables.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});