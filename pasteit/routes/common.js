let env = require('./env.json')
exports.config = function() {
    let nenv = process.env.NODE_ENV || 'development';
    return env[nenv];
}
