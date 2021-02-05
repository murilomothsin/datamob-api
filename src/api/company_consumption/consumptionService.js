const CompanyConsumption = require('./consumption')

CompanyConsumption.methods(['get', 'post', 'put', 'delete'])
CompanyConsumption.updateOptions({new: true, runValidators: true})

module.exports = CompanyConsumption