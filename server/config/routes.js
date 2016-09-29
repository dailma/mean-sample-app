var mongoose = require("mongoose");

var Question = mongoose.model("Question"),
	Game     = mongoose.model("Game");

// include controllers
var sessions  = require("../controllers/sessions.js"),
	questions = require("../controllers/questions.js"),
	games     = require("../controllers/games.js");

// export the routes
module.exports = function(app){
	app.get("/sessions", sessions.get);
	app.post("/sessions", sessions.create);
	app.delete("/sessions", sessions.destroy);
	app.get("/questions", questions.get);
	app.post("/questions", questions.create);
}
