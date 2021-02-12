const restful = require('node-restful')
const mongoose = restful.mongoose

const groupSchema = new mongoose.Schema({
    group_name: { type: String },
    company_name: { type: String },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Group', groupSchema);
