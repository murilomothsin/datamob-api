const express = require('express')
const auth = require('./auth')


module.exports = function(server) {

  // API routes
  const router = express.Router()

  server.use('/api', router)
  router.use(auth);

  // USERS Routes
  const userService = require('../api/user/userService')
  const companyService = require('../api/company/companyService')
  userService.register(router, '/users')
  companyService.register(router, '/companies')
}