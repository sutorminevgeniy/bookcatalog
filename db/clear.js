const { sequelize, Author } = require('./models');



// Проверка соединения с базой
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Удаление таблицы:
    // await Author.drop()
    // console.log('Таблица `Author` была удалена.')

    // Удаление всех таблиц:
    await sequelize.drop()
    console.log('Все таблицы были удалены.')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();

