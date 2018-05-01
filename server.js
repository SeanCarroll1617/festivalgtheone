const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes/router.js");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + "/public")));
app.use(routes);

app.listen(process.env.PORT || 3000, function(){
    console.log("SERVER IS STARTED ON PORT ")
});
