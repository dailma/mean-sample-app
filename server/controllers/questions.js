var mongoose = require("mongoose");

var Question = mongoose.model("Question");

function QuestionsController(){
	this.create = function(request, response){
		var newQuestion = new Question(request.body);
		newQuestion.save(function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				response.json({status:"success", question:returnedData});
			}
		});
	}
	this.get = function(request, response){
		Question.find({}, function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				response.json({status:"success", questions:returnedData});
			}
		});
	}
}

module.exports = new QuestionsController();