appMod.controller("sessionsController", ["$scope", "$location", "sessionsFactory", function($scope, $location, sessionsFactory){
	$scope.sessionName = "";
	$scope.login = function(){
		if (!$scope.user) {
			$location.url("/");
		} else {
			sessionsFactory.login($scope.user.name, function(user){
				$scope.sessionName = user.sessionName;
			});
			$location.url("/dashboard");
		}
	}
}]);