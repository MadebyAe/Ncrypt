var auth = require('./..');
var test = require('tape');

auth({key: 'key', secret: 'secret'});
// ======================================== 
// ! Auth
// ========================================
test('Encrypt Test', function(t) {
  var password = auth.encrypt('password');
  t.equal(password, '4290bac24d78e756163d8de9db5d6dc15c1da845a462b4d910544d3ffb39f3a64017f65e029b73fb');
  t.end();
});

test('Hash Test', function(t) {
  var password = auth.encrypt('passwords');
  t.notEqual(password, '4290bac24d78e756163d8de9db5d6dc15c1da845a462b4d910544d3ffb39f3a64017f65e029b73fb');
  t.end();
});