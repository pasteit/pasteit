var express = require('express');
var bodyParser = require("body-parser");
var router = express();
var redis = require("redis");
var client = redis.createClient();
var uuid = require("uuid4");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/submitPaste', function(req, res, next) { 
    var new_paste = {
        "language": req.body.language,
        "paste": req.body.paste,
        "mime" : req.body.mime
    }

    var hash = uuid();
    client.hmset(hash, new_paste);

    res.redirect("/"+hash);  
});

router.get("/error", function(req, res) {
    res.render("error");
});

router.get("/:hash/", function(req, res) {
    var hash = req.params.hash;

    var result = client.hgetall(hash, function(err, reply) {
        if(reply == null) {
            res.redirect("/error");
        } else {
            var paste = {
                language : reply.language,
                pastedcontent : reply.paste,
                mime : reply.mime,
                tag : reply.tag
            }

            res.render("pasted", paste);
        }
    });
});

router.get("/delete/:hash", function(req, res) {
    var hash = req.params.hash;
    client.del(hash);

    res.redirect("/");
});

module.exports = router;

