const db = require('../');

class Price extends db.Model {
  get tableName() { return 'prices'; }
  get hasTimestamps() { return true; }
}

module.exports = db.model('Price', Price);
