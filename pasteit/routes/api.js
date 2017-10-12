let express = require('express');
let router = express();
let fn = require('./functions')

router.get('/api', function(req, res) {
    res.json({message: 'Hooray! Welcome to the RESTful-API'});
});

router.route('/api/create')
    .post(function(req, res) {
        let hash = fn.newPaste(req);
        res.json({paste_url: req.get('host') + '/p/' + hash});
});

router.route('/api/p/')
    .post(function(req, res) {
        fn.getPaste(req.params.hash, function(paste) {
            if (paste === null) {
                res.status(404).send('Not found');
            } else {
                res.json({result: paste});
            }
        });
});

module.exports = router;
