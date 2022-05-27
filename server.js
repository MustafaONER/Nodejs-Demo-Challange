const express = require('express')
const router = require('./config/router')
const { engine } = require('express/lib/application')
const req = require('express/lib/request')
const app = express()
app.set(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

//require mongoose
require('./config/mongoose')


//require router
app.use(router)

app.listen(7000)