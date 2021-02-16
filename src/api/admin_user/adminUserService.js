const AdminUser = require('./adminUser')

AdminUser.methods(['get', 'post', 'put', 'delete'])
AdminUser.updateOptions({new: true, runValidators: true})

module.exports = AdminUser