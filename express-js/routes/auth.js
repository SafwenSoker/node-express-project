const express = require('express')
const router = require('./people')
const loginRouter = express.Router()

loginRouter.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).send("Please enter you name")
    }
    res.status(200).json({ result: "success", name: name })
})
module.exports = loginRouter