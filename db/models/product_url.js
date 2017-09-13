const db = require('../');

class ProductUrl extends db.Model {
  get tableName() { return 'product_urls'; }
}

module.exports = db.model('ProductUrl', ProductUrl);
