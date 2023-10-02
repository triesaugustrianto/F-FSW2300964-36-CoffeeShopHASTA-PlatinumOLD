const db = require('../db/db')

module.exports = {
    showAll : () => {
        return db.select('*').from('products')
    }
}