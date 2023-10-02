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
    }
}