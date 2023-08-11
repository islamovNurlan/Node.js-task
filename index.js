const express = require('express')
require('colors')
require('dotenv').config()
const Router = require('./routers/user.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', Router)

const PORT = process.env.MY_PORT
app.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`.bold.blue))
