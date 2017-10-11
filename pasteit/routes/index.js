var express = require("express");
var bodyParser = require("body-parser");
var router = express();
var uuid = require("uuid4");
var fn = require("./functions");

router.get("/error", function(req, res) {
    res.render("error");
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/submitPaste', function(req, res, next) { 
    var hash = fn.newPaste(req);

    res.redirect("/p/"+hash);  
});

router.get("/p/:hash/", function(req, res) {
    var p = fn.getPaste(req.params.hash, function(paste) {
        res.render("pasted", paste);
    });
});

router.get("/delete/:hash", function(req, res) {
    var hash = req.params.hash;
    client.del(hash);

    res.redirect("/");
});

module.exports = router;

