
var path = require("path");

var reservations = require("../reservations");
var waitingList = require("../waitingList");

module.exports = function (app) {
	app.get("/api/:input?", function(req,res) {
		var chosen = req.params.input;

		if (chosen === "waitlist") {
			return res.json(waitingList);
		}
		else if (chosen === "reservations") {
			return res.json(reservations);
		}
		else {
			return res.json(false);
		}
	});

}