const restful = require('node-restful')
const mongoose = restful.mongoose

const companySchema = new mongoose.Schema({
    name: { type: String },
    identification: { type: String },
    email: { type: String },
    contact: { type: String },
    phone: { type: String },
    zip_code: { type: String },
    address_line: { type: String },
    city: { type: String },
    state: { type: String },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Company', companySchema);
