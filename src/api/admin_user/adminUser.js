const restful = require('node-restful')
const mongoose = restful.mongoose

const adminUserSchema = new mongoose.Schema({
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  name: { type: String },
  adminID: { type: String },
  email: { type: String },
  company: { type: String },
  GMT: { type: String },
  language: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('AdminUser', adminUserSchema);
