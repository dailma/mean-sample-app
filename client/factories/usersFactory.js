appMod.factory("usersFactory", ["$http", function($http){
	function UsersFactory(){
		var _this = this;

		this.getSession = function(callback){
			$http.get("/sessions").then(function(returnedData){
				if (typeof(callback) == "function") {
					callback(returnedData.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.login = function(user, callback){
			$http.post("/sessions", {name:user}).then(function(returnedData){
				if (typeof(callback) == "function") {
					callback(returnedData.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
		this.logout = function(callback){
			$http.delete("/sessions").then(function(returnedData){
				if (typeof(callback) == "function") {
					callback(returnedData.data);
				}
			}, function(err){
				if (typeof(callback) == "function") {
					callback(err);
				}
			});
		}
	}
	return new UsersFactory();
}]);