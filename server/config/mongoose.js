var mongoose = require("mongoose"),
	fs = require("fs"),  // needed to load models
	path = require("path"), // needed to get path to models
	models_path = path.join(__dirname, "../models"),
	reg = new RegExp(".js$", "i"),
	dbURI = "mongodb://localhost/surveys";

mongoose.connect(dbURI);

// if connection is successful
mongoose.connection.on("connected", function(){
	console.log(`Mongoose default connection open to ${ dbURI }`);
});

// if connection throws an error
mongoose.connection.on("error", function(err){
	console.error(`Mongoose default connection error: ${ err }`);
});

// when connection is terminated
mongoose.connection.on("disconnected", function(){
	console.log("Mongoose default connection disconnected");
});

// if Node.js process ends, close Mongoose connection
process.on("SIGINT", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose default connection disconnected because of app termination");
		process.exit(0);
	});
});

// require (i.e., run) each JavaScript file in the models path
fs.readdirSync(models_path).forEach(function(file){
	// if (file.indexOf(".js") >= 0) {  // old version; replaced by regex test
	if (reg.test(file)) {
		require(path.join(models_path, file));
	}
});