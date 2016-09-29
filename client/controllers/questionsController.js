appMod.controller("questionsController", ["$scope", "$location", "questionsFactory", "usersFactory", function($scope, $location, questionsFactory, usersFactory){
	$scope.verifySession = function(){
		usersFactory.getSession(function(returnedData){
			if (!returnedData.sessionName) {
				$location.url("/");
			} else {
				$scope.sessionName = returnedData.sessionName;
			}
		});
	}
	$scope.endSession = function(){
		usersFactory.logout(function(){
			$scope.sessionName = "";
			$location.url("/");
		});
	}
	$scope.addQuestion = function(){
		questionsFactory.create($scope.question, function(returnedData){
			$location.url("/");
		}, function(err){
			$location.url("/new_question");
		});
	}
	$scope.getQuestions = function(){
		questionsFactory.getThree(function(returnedData){
			// TODO: randomize answers; flag correct answer
			$scope.questions = returnedData.questions;
		});
	}
	// TODO: write $scope.scoreQuiz()
	$scope.goHome = function(){
		$location.url("/");
	}
}]);