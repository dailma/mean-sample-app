var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	qtext: {
		type:String, required:true, trim:true, minlength:15
	},
	answer: {
		type:String, required:true, trim:true
	},
	fake1: {
		type:String, required:true, trim:true
	},
	fake2: {
		type:String, required:true, trim:true
	}
});

var Question = mongoose.model("Question", QuestionSchema);