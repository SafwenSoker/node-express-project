const express = require('express')
const app = express()
const logger = require("./logger-middleware")
const authorize = require("./authorize")
// app.use([logger, authorize])
app.get('/', logger, (req, res) => {
    res.send('homepage')
    console.log(req.user);
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})
app.get('/clients', logger, (req, res) => {
    res.send('Client profile')
})
app.listen(5000)