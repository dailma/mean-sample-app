appMod.factory("questionsFactory", ["$http", function($http){
	function QuestionsFactory(){
		var _this = this;

		this.create = function(newQuestion, callback){
			$http.post("/questions", newQuestion).then(function(returnedData){
				if (typeof(callback) == "function") {
					callback(returnedData.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.getThree = function(callback){
			$http.get("/questions").then(function(returnedData){
				numQs = returnedData.data.questions.length;
				// close your eyes--this next part is ugly as sin
				idx1 = Math.floor(Math.random() * numQs);
				do {
					idx2 = Math.floor(Math.random() * numQs);
				} while (idx1 === idx2)
				do {
					idx3 = Math.floor(Math.random() * numQs);
				} while (idx1 === idx3 || idx2 === idx3)
				selectedQs = [];
				selectedQs.push(returnedData.data.questions[idx1]);
				selectedQs.push(returnedData.data.questions[idx2]);
				selectedQs.push(returnedData.data.questions[idx3]);
				// okay; you can open your eyes again
				if (typeof(callback) == "function") {
					callback({questions:selectedQs});
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