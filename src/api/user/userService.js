const User = require('./user')

User.route('login.post', function(req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(500).json({ type: false, data: "Error occured: " + err });
      return ;
    }
    // No user found with that username
    if (!user) {
      res.status(400).json({ type: false, data: "Invalid email/password." });
      return ;
    }

    // Make sure the password is correct
    user.verifyPassword(req.body.password, function(err, isMatch) {
      if (err) {
        res.status(400).json({ type: false, data: "Invalid email/password." });
        return ;
      }

      // Password did not match
      if (!isMatch) {
        res.status(400).json({ type: false, data: "Invalid email/password." });
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