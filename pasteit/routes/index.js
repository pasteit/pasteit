let express = require('express');
let router = express();
let fn = require('./functions');
let path = require('path');

router.get('/error', function(req, res) {
    res.render('error');
});

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/submitPaste', function(req, res, next) {
    let hash = fn.newPaste(req);
    res.redirect(path.join("p", hash));
});

router.get('/p/:hash/', function(req, res) {
    fn.getPaste(req.params.hash, function(paste) {
        if (paste === null) {
            res.status(404).send('Not found');
        } else {
            res.render('pasted', paste);
        }
    });
});

router.get('/delete/:hash', function(req, res) {
    let hash = req.params.hash;
    client.del(hash);

    res.redirect('/');
});

module.exports = router;

