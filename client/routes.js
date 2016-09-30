var appMod = angular.module("appityApp", ["ngRoute"]);

appMod.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller:  "sessionsController"
		})
		.when("/dashboard", {
			templateUrl: "partials/dashboard.html",
			controller:  "questionsController"
		})
		.when("/create", {
			templateUrl: "partials/create.html",
			controller:  "questionsController"
		})
		.when("/poll/:id", {
			templateUrl: "partials/poll.html",
			controller:  "pollsController"
		})
		.otherwise({
			redirectTo: "/"
		});
});