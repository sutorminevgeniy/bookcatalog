const Sequelize = require('sequelize');

const authorRes = require('./authors.json');



// Настройка соединения с базой
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});



// Проверка соединения с базой
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
run();

// закрытие соединения
// sequelize.close()
