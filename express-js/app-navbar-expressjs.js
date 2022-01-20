const express = require('express')
const { resolve } = require('path')
const app = express()
const path = require('path')
const { products } = require('./data.js')


// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./index.html"))
// })




app.all("*", (req, res) => {
    req.status(404).send("Resource not found")
})

app.listen((5000), () => { })