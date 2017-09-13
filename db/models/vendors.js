const db = require('../');

class Vendor extends db.Model {
  get tableName() { return 'vendors'; }
}

module.exports = db.model('Vendor', Vendor);
