const env = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../knexfile');
const envConfig = config[env];
const connection = knex(envConfig);

module.exports = connection;
