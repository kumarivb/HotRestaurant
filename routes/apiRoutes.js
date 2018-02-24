
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

	// Adds a new reservation
	app.post("/api/new-reservation", function(req,res) {

		var newReservation = req.body;

		console.log(newReservation);

		reservations.push(newReservation);
		
		return res.json(reservations);

    });

    // Adds a new waiting list
	app.post("/api/new-waitinglist", function(req,res) {

		var newWaitingList = req.body;

		console.log(newWaitingList);

		waitingList.push(newWaitingList);
		
		return res.json(waitingList);

    });

}