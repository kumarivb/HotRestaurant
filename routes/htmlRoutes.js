
var path = require("path");

module.exports = function (app) {
	// Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../html/home.html"));
	});

	// Basic route that sends the user first to the AJAX Page
	app.get("/reserve", function(req, res) {
	  res.sendFile(path.join(__dirname, "../html/reserve.html"));
	});

	// Basic route that sends the user first to the AJAX Page
	app.get("/tables", function(req, res) {
	  res.sendFile(path.join(__dirname, "../html/tables.html"));
	});
}