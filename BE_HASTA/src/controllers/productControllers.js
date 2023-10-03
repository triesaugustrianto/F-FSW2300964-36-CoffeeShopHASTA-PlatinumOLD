const db = require('../db/db')
const productModels = require('../models/productModels')

module.exports = {
    showAll : async (req, res) => {
        try {
            const data = await productModels.showAll()

            res.status(200).json({
                status  : 200,
                data    : data
            })
        } catch (error){
            res.status(500).json({
                status      : 500,
                message     : error.message
            })
        }
    },

    showById : async (req, res) => {
        const id = req.params.id

        try {
            const data = await productModels.showById(id)

            if(!data) {
                res.json({
                    status : 404,
                    message : 'Product Not Found'
                })
            } else {
                res.status(200).json ({
                    status : 200,
                    data : data
                }) 
            }
        } catch (error) {
            res.json({
                status : 500,
                message : error.message
            })
        }
    },

    create : async (req, res) => {
        try {
            const {
                name, 
                price, 
                stock, 
                category, 
                image, 
                statusStock, 
                statusProduck, 
                description
            } = req.body

            const data = await productModels.create(
                name, 
                price, 
                stock, 
                category, 
                image, 
                statusStock, 
                statusProduck, 
                description
            )
            
            res.status(201).json({
                status      : 201,
                message     : 'Product Successfully Added'
            })

        } catch (error) {
            res.status(500).json({
                status      : 500,
                message     : error.message
            })
        }
    }
}