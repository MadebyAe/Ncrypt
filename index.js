var crypto  = require('crypto');
var options = null;

function auth(opts) {
  options = opts;
  if (opts) {
    return function(req, res, next) {
      next();
    }
  } else {
    throw new Error('Add secret and key');
  }
} 

function encrypt(password) {
  var encrypt = crypto.createHmac('sha1', options.key).update(password).digest('hex') + crypto.createHmac('sha1', options.secret).update(password).digest('hex');
  return encrypt;
}

function token() {
  var now = (new Date().getTime()).toString() + crypto.randomBytes(32).toString('hex');
  var token = crypto.createHmac('sha1', options.key).update(now).digest('hex') + crypto.createHmac('sha1', options.secret).update(now).digest('hex');
  return token;
}

module.exports         = auth;
module.exports.encrypt = encrypt;
module.exports.token   = token;