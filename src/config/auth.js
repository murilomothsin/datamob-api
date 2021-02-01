var jwt = require("jsonwebtoken");

const SKIP_AUTH = [
  '/users',
  '/users/login'
]

module.exports = function(req, res, next) {
  if(SKIP_AUTH.indexOf(req.path) !== -1){
    // Skip auth
    return next();
  }
  var token = req.headers['Authorization'] || req.headers['authorization'];
  if (token) {
    jwt.verify(token, "supersecret", function(err, decoded) {
      if (err) { return res.status(403).send({ success: false, message: 'Failed to authenticate token.', err: err }); }
      else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({ success: false, message: 'No token provided.' });
  }
};
