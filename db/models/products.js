const db = require('../');

class Product extends db.Model {
  get tableName() { return 'products'; }

  followers() {
    return this.belongsToMany('Profile', 'followed_products');
  }

  prices() {
    return this.belongsToMany('Vendor')
      .through('Price');
  }

  vendors() {
    return this.belongsToMany('Vendor')
      .through('ProductUrl');
  }
}

module.exports = db.model('Product', Product);
