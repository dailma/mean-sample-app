var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GamesSchema = new mongoose.Schema({
	username: {
		type:String, required:true, trim:true, minlength:2
	},
	score: {
		type:Number
	}
});

var Game = mongoose.model("Game", GamesSchema);