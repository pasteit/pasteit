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
    var lang = req.body.language;
    var paste = req.body.paste;
    
    res.render('paste');
});

module.exports = router;

