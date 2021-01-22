const restful = require('node-restful')
const mongoose = restful.mongoose
var bcrypt = require('bcrypt-nodejs');


const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, default: false },
    token: { type: String },
    createdAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function(callback) {
  var user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

userSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = restful.model('User', userSchema);
