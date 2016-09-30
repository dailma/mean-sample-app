function SessionsController(){
	this.get = function(request, response){
		response.json({sessionName:request.session.name});
	}
	this.create = function(request, response){
		request.session.name = request.body.name;
		response.json({sessionName:request.session.name});
	}
	this.destroy = function(request, response){
		request.session.destroy(function(err){
			if (err) {
				response.json(err);
			} else {
				response.json({status:"success"});
			}
		});
	}
}
module.exports = new SessionsController();