const Group = require('./group')

Group.methods(['get', 'post', 'put', 'delete'])
Group.updateOptions({new: true, runValidators: true})

module.exports = Group