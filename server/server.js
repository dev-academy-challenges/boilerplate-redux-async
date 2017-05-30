var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var redditRoutes = require('./reddit')
var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/reddit', redditRoutes)

module.exports = server
