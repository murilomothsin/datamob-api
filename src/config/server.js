const port = process.env.PORT || 3003

const bodyParser = require('body-parser')
const express = require('express')
var logger = require('morgan');
const server = express()
const cors = require('cors')

server.use(logger('dev'));
server.use(cors())
server.use( bodyParser.urlencoded({extended: true}) )
server.use( bodyParser.json() )

server.listen(port, function(){
    console.log("Listening on port: "+ port)
})

module.exports = server