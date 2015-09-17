var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
  username: String,
  email: String
});

//connect to a database

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/github-auth');

module.exports = mongoose.model('users', User);
