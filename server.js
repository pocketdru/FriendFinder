var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/app/public/home.html"));
});

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function(){
    console.log("App listening on: http://localhost:" + PORT);
});