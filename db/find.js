const authorRes = require('./authors.json');

const { sequelize, Author, Book } = require('./models');

// Проверка соединения с базой
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // синхронизация таблиц с существующими моделями
    await sequelize.sync();
    console.log('Tables sync.');

    // получение записей
    // const allAuthors = await Author.findAll();
    const allAuthors = await Author.findAll({
      attributes: ['lastName', 'firstName', 'middleName', 'id'],
      order: [
        ['lastName', 'ASC'], // Сортировка по фамилии (по возрастанию)
        // ['lastName', 'DESC'], // Сортировка по фамилии (по убыванию)
      ]
    });
    console.log(allAuthors);

    // получение записи
    // const author = await Author.findOne({
    //   where: {
    //     id: 2,
    //   },
    //   attributes: ['lastName', 'id'],
    // });
    // console.log(author);


    // получение записи
    const book = await Book.findOne({
      where: {
        id: 1,
      },
    });
    console.log(book);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();

