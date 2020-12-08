const connection = require('../config/mysql')

module.exports = {
  getProductModel: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product', (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}