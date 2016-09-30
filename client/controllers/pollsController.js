appMod.controller("pollsController", ["$scope", "$location", "$routeParams", "questionsFactory", "sessionsFactory", function($scope, $location, $routeParams, questionsFactory, sessionsFactory){
	// $scope.voteConfirm = false;  // TODO

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
	$scope.getQuestion = function(){
		questionsFactory.getOne($routeParams, function(returnedData){
			$scope.question = returnedData.questions;
		});
	}
	$scope.vote = function(option){
		questionsFactory.vote($scope.question, option, function(returnedData){
			// $scope.voteConfirm = true;  // TODO
			$location.url("/dashboard");
		});
	}
}]);