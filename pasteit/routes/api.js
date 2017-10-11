var express = require("express");
var router = express();
var uuid = require("uuid4");
var fn = require("./functions")

router.get("/api", function(req, res) {
    res.json({ message: 'Hooray! Welcome to the RESTful-API' });
});

router.route("/api/create")
    .post(function(req, res) {
        var hash = fn.newPaste(req);
        
        res.json({ paste_url : req.get("host") + "/p/"+hash });    
});

router.route("/api/p/")
    .post(function(req, res) {
        var result = fn.getPaste(req.params.hash);


        res.json({ error : "Invalid hash" }) ? result == null : res.json({ result : paste });
});

module.exports = router;
