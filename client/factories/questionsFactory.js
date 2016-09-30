appMod.factory("questionsFactory", ["$http", function($http){
	function QuestionsFactory(){
		var _this = this;

		this.index = function(callback){
			$http.get("/questions").then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.getOne = function(questionId, callback){
			$http.get("/questions/" + questionId.id).then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.create = function(newQuestion, callback){
			$http.post("/questions", newQuestion).then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.destroy = function(question, callback){
			$http.delete("/questions/" + question._id).then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.vote = function(question, option, callback){
			$http.put("/questions/" + question._id, {option:option}).then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
	}
	return new QuestionsFactory();
}]);