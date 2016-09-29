appMod.controller("usersController", ["$scope", "$location", "usersFactory", function($scope, $location, usersFactory){
	$scope.verifySession = function(){
		usersFactory.getSession(function(returnedData){
			if (!returnedData.sessionName) {
				do {
					$scope.sessionName = prompt("Enter your name to log in", "Guest");
				} while ($scope.sessionName.length < 2);
				usersFactory.login($scope.sessionName, function(returnedData){
				});
			} else {
				$scope.sessionName = returnedData.sessionName;
			}
		});
	}
	$scope.endSession = function(){
		usersFactory.logout(function(){
			$scope.sessionName = "";
			$scope.verifySession();
		});
	}
	$scope.play = function(){
		$location.url("/lets_play");
	}
}]);