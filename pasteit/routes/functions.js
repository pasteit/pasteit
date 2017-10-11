var redis = require("redis");
var client = redis.createClient();
var uuid = require("uuid4");


module.exports = {
    newPaste : function(req) {
        var newPaste = module.exports.createPaste(req);
        var hash = uuid();
        module.exports.addNewPaste(hash, newPaste);

        return hash;
    },

    createPaste : function(req) {
        var newPaste = {
            "language" : req.body.language,
            "paste" : req.body.paste,
            "mime" : req.body.mime
        }

        return newPaste;
    },

    addNewPaste : function(hash, newPaste) {
        client.hmset(hash, newPaste);
    },

    getPaste : function(hash, callback) {
        client.hgetall(hash, function(err, reply) {
            var paste = {};
            if(reply == null)
                paste = { error : err }
            else {
                paste = {
                    "language" : reply.language,
                    "pastedcontent" : reply.paste,
                    "mime" : reply.mime,
                    "tag" : reply.tag
                }
            }

            callback(paste);
        });
    }
}

