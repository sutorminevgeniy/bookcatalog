const authorRes = require('./authors.json');

const { sequelize, Author } = require('./models');

// Проверка соединения с базой
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // await sequelize.sync();
    await sequelize.sync({force: true});
    console.log('Tables sync.');

    // создание записей
    const author = await Author.create({
        firstName: 'Фёдор',
        middleName: 'Михайлович',
        lastName: 'Достоевский'
    })
    console.log(author.toJSON())
    console.log(JSON.stringify(author, null, 2))
    const authors = await Author.bulkCreate(authorRes);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();

