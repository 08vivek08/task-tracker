var express = require("express");
var app = express();
var port = process.env.PORT || 5000;


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));



var todoRoutes = require("./routes/todos");

app.get("/", function (req, res) {
    // res.send("Hi there this is a string, from root route");
    // res.json("Hi there this is a json string, from root route");

    // res.send({ message: "Hi there this is a json data,from root route" });
    // res.json({ message: "Hi there this is also json data,from root route" });

    res.sendFile("index.html");

});

app.use("/api/todos", todoRoutes);

app.listen(port, function () {
    console.log("App is running on", port);
});