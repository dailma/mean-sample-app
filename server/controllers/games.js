var mongoose = require("mongoose");

var Game = mongoose.model("Game");

function GamesController(){
	this.index = function(request, response){
		console.log("+++ In GamesController/this.index, request.body =", request.body);
	}
}

module.exports = new GamesController();