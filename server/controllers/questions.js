var mongoose = require("mongoose");

var Question = mongoose.model("Question");

function QuestionsController(){
	this.index = function(request, response){
		Question.find({}, function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				response.json({status:"success", questions:returnedData});
			}
		});
	}
	this.show = function(request, response){
		Question.findOne({_id:request.params.id}, function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				response.json({status:"success", questions:returnedData});
			}
		});
	}
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
	this.update = function(request, response){
		Question.findOne({_id:request.params.id}, function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				var question = returnedData;
				var option = parseInt(request.body.option);
				switch(option) {
					case 1:
						question.vote1 += 1;
						break;
					case 2:
						question.vote2 += 1;
						break;
					case 3:
						question.vote3 += 1;
						break;
					case 4:
						question.vote4 += 1;
						break;
				}
				question.save(function(err, returnedData){
					if (err) {
						response.json({status:"failure", err});
					} else {
						response.json({status:"success", question:returnedData});
					}
				});
			}
		});
	}
	this.destroy = function(request, response){
		Question.remove({_id:request.params.id}, function(err, returnedData){
			if (err) {
				response.json({status:"failure", err});
			} else {
				response.json({status:"success", question:returnedData});
			}
		});
	}
}
module.exports = new QuestionsController();