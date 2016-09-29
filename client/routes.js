var appMod = angular.module("appityApp", ["ngRoute"]);

appMod.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller:  "usersController"
		})
		.when("/new_question", {
			templateUrl: "partials/new_question.html",
			controller:  "questionsController"
		})
		.when("/lets_play", {
			templateUrl: "partials/lets_play.html",
			controller:  "questionsController"
		})
		.otherwise({
			redirectTo: "/"
		});
});