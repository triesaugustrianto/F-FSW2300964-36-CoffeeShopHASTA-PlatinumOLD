const express = require('express')
const app = express()
const router = require('express').Router()
const db = require('../db/db')
const productControllers = require('../controllers/productControllers')
const logger = (req, res, next) => {
    next()
}

app.use(express.urlencoded())
app.use(logger)

router.get('/api/products', productControllers.showAll)

module.exports = router