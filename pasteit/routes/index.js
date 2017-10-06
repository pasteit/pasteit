var express = require('express');
var bodyParser = require("body-parser");
var router = express();

router.use(bodyParser.urlencoded({ extended : false }));
router.use(bodyParser.json());
router.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/submitPaste', function(req, res, next) { 
    var l = req.body.language;
    var p = req.body.paste;
    var m = req.body.mime;
    
    res.render('pasted', { language: l, pastedcontent: p, mime: m });
});

module.exports = router;

