const authorRes = require('./authors.json');

const { sequelize } = require('./config');
const { DataBase } = require('./db');

// Проверка соединения с базой
async function run() {
  await DataBase.run();

  // синхронизация таблиц с существующими моделями
  await sequelize.sync({force: true});
  console.log('Tables sync.');

  // создание записи
  const author = await DataBase.createAuthor({
    firstName: 'Фёдор',
    middleName: 'Михайлович',
    lastName: 'Достоевский'
  });
  console.log(author);

  // создание записей
  const authors = await DataBase.createAuthors(authorRes);
  console.log(authors);

  // создание записи
  const book = await DataBase.createBook({
    name: 'Записки мертвого дома',
    description: 'Книга о жизни на каторге',
    AuthorId: author.id
  });
  await DataBase.createBook({
    name: 'Белый Бим Чёрное ухо',
    description: 'Книга о верной собаке'
  });
  console.log(book);
}

run();

