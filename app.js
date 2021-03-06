var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('index')})
app.get('/rooms', function (req, res){res.render('rooms')})
app.get('/room-view', function (req, res){res.render('room-view')})
app.get('/reservation', function (req, res){res.render('reservation')})
app.get('/service', function (req, res){res.render('service')})
app.get('/map', function (req, res){res.render('map')})

app.listen(3300, function () {
  console.log('App listening on port 3300!')
})