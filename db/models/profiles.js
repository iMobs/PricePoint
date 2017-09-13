const db = require('../');

class Profile extends db.Model {
  get tableName() { return 'profiles'; }

  auths() {
    return this.hasMany('Auth');
  }

  followedProducts() {
    return this.belongsToMany('Product', 'followed_products');
  }
}

module.exports = db.model('Profile', Profile);
