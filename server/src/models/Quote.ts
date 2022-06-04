import { Model } from 'objection';
import knex from '../knex';

Model.knex(knex);

class QuoteModel extends Model {
  static get tableName() {
    return 'quotes';
  }
}

export default QuoteModel;
