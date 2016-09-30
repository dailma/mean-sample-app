var mongoose = require("mongoose");

var Question = mongoose.model("Question");

// include controllers
var sessions  = require("../controllers/sessions.js"),
	questions = require("../controllers/questions.js");

// export the routes
module.exports = function(app){
	app.get("/sessions", sessions.get);
	app.post("/sessions", sessions.create);
	app.delete("/sessions", sessions.destroy);
	app.get("/questions/:id", questions.show);
	app.get("/questions", questions.index);
	app.post("/questions", questions.create);
	app.put("/questions/:id", questions.update);
	app.delete("/questions/:id", questions.destroy);
	app.get("/logout", sessions.destroy);

	// TODO: remove the following route before deployment
	app.get("/test", function(request, response){
		console.log("request.body =", request.body);
		response.json({status:"Set in server/config/routes.js"});
	});
}
