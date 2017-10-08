var express = require('express');
var bodyParser = require("body-parser");
var router = express();
var redis = require("redis");
var client = redis.createClient();
var flatten = require("flat")

var getNewHash = function() {
    return (Math.floor(Math.random() * 1e15) + new Date().getMilliseconds()).toString(36);
};

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/submitPaste', function(req, res, next) { 
    var new_paste = {
        "language": req.body.language,
        "paste": req.body.paste,
        "mime" : req.body.mime
    }

    var hash = getNewHash();

    client.hmset(hash, new_paste);

    res.redirect("/"+hash);  
});

router.get("/:hash/", function(req, res) {
    var hash = req.params.hash;

    var result = client.hgetall(hash, function(err, reply) {
        var paste = {
            language : reply.language,
            pastedcontent : reply.paste,
            mime : reply.mime,
            tag : reply.tag
        }

        res.render("pasted", paste);
    });
});

module.exports = router;

