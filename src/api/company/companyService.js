const Company = require('./company')

Company.methods(['get', 'post', 'put', 'delete'])
Company.updateOptions({new: true, runValidators: true})

module.exports = Company