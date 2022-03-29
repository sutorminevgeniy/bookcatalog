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
    // const allAuthors = await Author.findAll({
    //   attributes: ['firstName', 'middleName', 'lastName', 'id'],
    // });
    // console.log(allAuthors);

    // получение записи
    const author = await Author.findOne({
      where: {
        id: 2,
      },
      attributes: ['lastName', 'id'],
    });
    console.log(author);


    // получение записи
    // const book = await Book.create({
    //   name: 'Записки мертвого дома',
    //   description: 'Книга о жизни на каторге',
    //   author_id: author.id
    // });
    // await Book.create({
    //   name: 'Белый Бим Чёрное ухо',
    //   description: 'Книга о верной собаке'
    // });
    // console.log(book);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();

