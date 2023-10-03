const db = require('../db/db')

module.exports = {
    showAll : () => {
        return db.select('*').from('products')
    },

    showById : (id) => {
        return db.select('*').from('products').where('id', id).first()
    },

    create : (
            name, 
            price, 
            stock, 
            category, 
            image, 
            statusStock, 
            statusProduct, 
            description
        ) => {
        return db('products').insert({
            name            : name,
            price           : price,
            stock           : stock,
            category        : category,
            image           : image,
            statusStock     : statusStock,
            statusProduct   : statusProduct,
            description     : description
        })
    }
}