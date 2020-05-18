const express = require('express')

const app = express()

const products = require(`../products.json`)
const getProducts = require(`./getProducts.js`)
const getProduct = require(`./getProduct.js`)

const SERVER_PORT = 4000

app.listen(SERVER_PORT, () => console.log(`app listening at SERVER_PORT ${SERVER_PORT}`))

app.get(`/api/products`, getProducts
)

app.get(`/api/products/:id`, getProduct)

