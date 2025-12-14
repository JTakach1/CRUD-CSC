const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig.development);
Model.knex(knex);

class Menu extends Model {
  static get tableName() {
    return 'molloyeats.menu';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        price: { type: 'number' },
        description: { type: ['string', 'null'] }
      }
    };
  }
}

module.exports = Menu;
