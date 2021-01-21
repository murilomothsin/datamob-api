const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_URL || 'mongodb://localhost/datamob-api';

mongoose.Promise = global.Promise

module.exports = mongoose.connect(mongo_url)