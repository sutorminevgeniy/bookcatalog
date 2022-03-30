const authorRes = require('./authors.json');

const { sequelize, Author, Book } = require('./models');

// Проверка соединения с базой
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // синхронизация таблиц с существующими моделями
    // await sequelize.sync();
    await sequelize.sync({force: true});
    console.log('Tables sync.');

    // создание записи
    const author = await Author.create({
      firstName: 'Фёдор',
      middleName: 'Михайлович',
      lastName: 'Достоевский'
    });
    console.log(author);

    // создание записей
    const authors = await Author.bulkCreate(authorRes);
    console.log(authors);


    // создание записи
    const book = await Book.create({
      name: 'Записки мертвого дома',
      description: 'Книга о жизни на каторге',
      AuthorId: author.id
    });
    await Book.create({
      name: 'Белый Бим Чёрное ухо',
      description: 'Книга о верной собаке'
    });
    console.log(book);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();

