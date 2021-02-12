const express = require('express')
const auth = require('./auth')


module.exports = function(server) {

  // API routes
  const router = express.Router()

  server.use('/api', router)
  router.use(auth);

  // const seeds = require('../seeds/consumption')
  // server.get('/seeds', seeds)

  // USERS Routes
  const userService = require('../api/user/userService')
  userService.register(router, '/users')

  // COMPANY Routes
  const companyService = require('../api/company/companyService')
  companyService.register(router, '/companies')

  // COMPANY CONSUMPTION Routes
  const ConsumptionService = require('../api/company_consumption/consumptionService')
  ConsumptionService.register(router, '/consumption')

  // GROUP Routes
  const groupService = require('../api/group/groupService')
  groupService.register(router, '/groups')
}