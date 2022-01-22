const express = require('express')
const app = express()
const morgan = requrie('morgan')
const logger = require("./logger-middleware")
const authorize = require("./authorize")
// app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send('homepage')
    console.log(req.user);
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/clients', (req, res) => {
    res.send('Client profile')
})
app.listen(5000)