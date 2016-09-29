var express		= require("express"),
	bodyParser	= require("body-parser"),
	path		= require("path"),
	session     = require("express-session");

var app			= express(),
	port_number	= 8000;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// set static paths
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "node_modules")));

// set session secret (such as it is)
app.use(session({
	secret:"greatbiglongninjastringthatyoucantseenopenope",
	resave:false,
	saveUninitialized:false,
	maxAge:1800000  // 30 minutes
}));

// configure database
require("./server/config/mongoose.js");

// configure routes
var routes = require("./server/config/routes.js");
routes(app);

// commence serving
app.listen(port_number, function(){
	console.log("Listening on port", port_number);
});