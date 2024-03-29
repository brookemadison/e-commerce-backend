// import the Sequelize constructor from the library
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const Sequelize = require('sequelize');

// create connection to the db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
