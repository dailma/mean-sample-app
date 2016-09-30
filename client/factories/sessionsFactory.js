appMod.factory("sessionsFactory", ["$http", function($http){
	function SessionsFactory(){
		var _this = this;

		this.get = function(callback){
			$http.get("/sessions").then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.login = function(user, callback){
			$http.post("/sessions", {name:user}).then(function(data){
				if (typeof(callback) == "function") {
					callback(data.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.logout = function(callback){
			$http.delete("/sessions").then(function(data){
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
	return new SessionsFactory();
}]);