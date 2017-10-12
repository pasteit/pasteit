let redis = require('redis');
let redisClient = redis.createClient();
let uuid = require('uuid4');


module.exports = {
    newPaste: function(req) {
        let newPaste = module.exports.createPaste(req);
        let hash = uuid();
        module.exports.addNewPaste(hash, newPaste);

        return hash;
    },

    createPaste: function(req) {
        let newPaste = {
            'language': req.body.language,
            'paste': req.body.paste,
            'mime': req.body.mime,
        };

        return newPaste;
    },

    addNewPaste: function(hash, newPaste) {
        redisClient.hmset(hash, newPaste);
    },

    getPaste: function(hash, callback) {
        redisClient.hgetall(hash, function(err, reply) {
            let paste = {};
            if (reply == null) {
                callback(null);
            } else {
                paste = {
                    'language': reply.language,
                    'pastedcontent': reply.paste,
                    'mime': reply.mime,
                    'tag': reply.tag,
                };
            }

            callback(paste);
        });
    },
};

