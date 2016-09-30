appMod.controller("questionsController", ["$scope", "$location", "questionsFactory", "sessionsFactory", function($scope, $location, questionsFactory, sessionsFactory){
	$scope.deleteConfirm = false;

	$scope.verify = function(){
		sessionsFactory.get(function(user){
			if (!user.sessionName) {
				$location.url("/");
			} else {
				$scope.sessionName = user.sessionName;
			}
		});
	}
	$scope.logout = function(){
		sessionsFactory.logout(function(){
			$scope.sessionName = "";
			$location.url("/");
		});
	}
	$scope.getAll = function(){
		questionsFactory.index(function(returnedData){
			$scope.questions = returnedData.questions;
		});
	}
	$scope.addQuestion = function(){
		$scope.question.creator = $scope.sessionName;
		$scope.question.vote1 = $scope.question.vote2 = $scope.question.vote3 = $scope.question.vote4 = 0;
		questionsFactory.create($scope.question, function(returnedData){
			$location.url("/dashboard");
		});
	}
	$scope.deleteQuestion = function(question){
		questionsFactory.destroy(question, function(returnedData){
			$scope.deleteConfirm = true;
			$scope.getAll();
		});
	}
}]);