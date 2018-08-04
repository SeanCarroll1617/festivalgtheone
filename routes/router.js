const express = require("express");
const fs = require("fs");
const path = require("path")

const router = express.Router();

router.route("/").get((req, res) => {
	fs.readFile("public/html/index.html", (err, data) => {
		res.writeHead(200, {'Content-Type': "text/html"});
		res.write(data)
		res.end();
	})
}).post((req, res) => {
	res.redirect(req.body.myFestival)
})

router.route("/Distortion").get((req, res) => {
	fs.readFile("public/html/distortion.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Tinderbox").get((req, res) => {
	fs.readFile("public/html/tinderbox.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Smukfest").get((req, res) => {
	fs.readFile("public/html/smukfest.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Danmarks%20Grimmeste%20Festival").get((req, res) => {
	fs.readFile("public/html/danmarksgrimmestefestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("COPENHELL").get((req, res) => {
	fs.readFile("public/html/copenhell.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Gr%C3%B8n%20Koncert").get((req, res) => {
	fs.readFile("public/html/grønkoncert.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/jelling%20Musikfestival").get((req, res) => {
	fs.readFile("public/html/jellingmusikfestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Musik%20Gi%20lejet").get((req, res) => {
	fs.readFile("public/html/musikilejet.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Northside").get((req, res) => {
	fs.readFile("public/html/northside.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Roskilde%20festival").get((req, res) => {
	fs.readFile("public/html/roskildefestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Sams%C3%B8%20Festival").get((req, res) => {
	fs.readFile("public/html/samsøfestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Skive%20Gfestival").get((req, res) => {
	fs.readFile("public/html/skivefestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Spot%20festival").get((req, res) => {
	fs.readFile("public/html/spotfestival.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
router.route("/Thy%20rock").get((req, res) => {
	fs.readFile("public/html/thyrock.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})

app.get('*', (req, res) => res.redirect('/public/html/404.html'))

module.exports = router
