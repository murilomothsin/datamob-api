const restful = require('node-restful')
const mongoose = restful.mongoose

const consumptionSchema = new mongoose.Schema({
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  type: { type: String },
  user: { type: String },
  phone: { type: String },
  group: { type: String },
  subgroup: { type: String },
  consumption: { type: String },
  roaming: { type: Boolean },
  provider: { type: String },
  company: { type: String },
  source_number: { type: String },
  target_number: { type: String },
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('CompanyConsumption', consumptionSchema);
