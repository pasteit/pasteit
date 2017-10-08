var redis = require("redis");
var client = redis.createClient();
var flatten = require("flat")

var test = {
    language : "python",
    paste: "print('Hallo Welt')",
    mime : "",
    tag: "mytag"
}

var getNewHash = function() {
    return (Math.floor(Math.random() * 1e15) + new Date().getMilliseconds()).toString(36).toUpperCase();
};

var hash = getNewHash();
client.hmset(hash, test);

client.hgetall(hash, function(err, replies) {
    console.log(replies.language);
    console.log(replies.paste);
    console.log(replies.mime);
    console.log(replies.tag);
});;

client.quit();
