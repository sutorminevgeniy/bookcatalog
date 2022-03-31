const Sequelize = require('sequelize');

// Настройка соединения с базой
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = { sequelize };