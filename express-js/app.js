const express = require('express')
const { toInteger } = require('lodash')
const app = express()
//or const app = require('express')()

const { products } = require('./data.js')
// app.get("/", (req, res) => {
//     res.json(products)
// })

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// app.get("/api/products/1", (req, res) => {
//     const newProduct = products.find((product) => product.id === 1)
//     res.json(newProduct)
// })

//This request should work :
//http://localhost:5000/api/products/1 
app.get("/api/products/:productId", (req, res) => {
    const singleProduct = products.find((product) => product.id === toInteger(req.params.productId))
    if (!singleProduct) {
        res.status(404).send('Product by id does not exist')
    }
    res.json(singleProduct)
})
//This request should work :
//http://localhost:5000/api/products/name/leather%20sofa 
app.get("/api/products/name/:productName", (req, res) => {
    const singleProduct = products.find((product) => product.name === req.params.productName)
    if (!singleProduct) {
        res.status(404).send('Product by name does not exist')
    }
    res.json(singleProduct)
})
//This request should work :
//http://localhost:5000/api/products/price/9.99 
app.get("/api/products/price/:productPrice", (req, res) => {
    const singleProduct = products.find((product) => product.price === parseFloat(req.params.productPrice))
    if (!singleProduct) {
        res.status(404).send('Product by price does not exist')
    }
    res.json(singleProduct)
})

app.listen(5000)



















// app.get('/', (req, res) => {
//     res.status(200).send("Homepage")
// })

// app.get('/about', (req, res) => {
//     res.status(200).send("About page")
// })
// app.all('*', (req, res) => {
//     res.status(404).send("Resource not found")
// })

// app.listen((5000), () => {
//     console.log("Server is listening on port 5000°");
// })

