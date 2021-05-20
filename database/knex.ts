const env = process.env.NODE_ENV || 'development';
import config from '../knexfile'
import { knex } from 'knex';

const KNEX = knex(config)

export default KNEX