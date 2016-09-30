var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({  // next time, implement options and votes as arrays
	content: {
		type:String, required:true, trim:true, minlength:8
	},
	option1: {
		type:String, required:true, trim:true, minlength:3
	},
	option2: {
		type:String, required:true, trim:true, minlength:3
	},
	option3: {
		type:String, required:true, trim:true, minlength:3
	},
	option4: {
		type:String, required:true, trim:true, minlength:3
	},
	vote1: {
		type:Number
	},
	vote2: {
		type:Number
	},
	vote3: {
		type:Number
	},
	vote4: {
		type:Number
	},
	creator: {
		type:String
	}
}, {timestamps:true});

var Question = mongoose.model("Question", QuestionSchema);