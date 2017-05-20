var express = require("express");
var app = express();
var uuid = require("node-uuid");
var bodyParser = require("body-parser");
var posts = require("./posts.json");

app.set("view engine", "jade");
app.set("views", "./views");

app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render("main");
});

app.get('/posts', function(req, res) {
	res.render("post");
});

app.post('/posts', function(req, res) {
	var post = {
		author : req.body.author,
		title : req.body.title,
		content : req.body.content,
		id : uuid.v4()
	};

	posts.push(post);

	res.json(post);
});

app.listen(3000, function() {
	console.log("Blog Live at port 3000 !")
});
