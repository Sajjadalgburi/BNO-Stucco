// this file is responsible for creating a connection to the mongoDb database

require('dotenv').config();

const { connection, connect } = require('mongoose');

// creating the connection string to the database
connect(process.env.mongoUri || 'mongodb://localhost:27017/BNOStucco');

// exporting the connection
module.exports = connection;
