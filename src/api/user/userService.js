var jwt = require("jsonwebtoken");
const User = require('./user')

User.route('login.post', function(req, res, next) {

  if(req.body.email === 'warning@test.com') {
    res.status(400).json({ type: false, data: "user_last_try" });
    return ;
  }

  if(req.body.email === 'error@test.com') {
    res.status(400).json({ type: false, data: "user_blocked" });
    return ;
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(500).json({ type: false, data: "Error occured: " + err });
      return ;
    }
    // No user found with that username
    if (!user) {
      res.status(400).json({ type: false, data: "invalid_user_password" });
      return ;
    }

    // Make sure the password is correct
    user.verifyPassword(req.body.password, function(err, isMatch) {
      if (err) {
        res.status(400).json({ type: false, data: "invalid_user_password" });
        return ;
      }

      // Password did not match
      if (!isMatch) {
        res.status(400).json({ type: false, data: "invalid_user_password" });
        return ;
      }

      // Success
      param = {"_id": user._id, "email": user.email}
      var token = jwt.sign(param, "supersecret");
      user.token = token
      user.save(function(err, user1){
        res.json({ type: true, data: user1, token: user1.token });
      });
    });
  });
});

User.methods(['get', 'post', 'put', 'delete'])
User.updateOptions({new: true, runValidators: true})

module.exports = User