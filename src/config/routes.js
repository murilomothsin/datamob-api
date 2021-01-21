const express = require('express')

module.exports = function(server) {

    // API routes
    const router = express.Router()

    server.use('/api', router)

    // USERS Routes
    const userService = require('../api/user/userService')
    userService.register(router, '/users')
}