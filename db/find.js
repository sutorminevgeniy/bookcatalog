const authorRes = require('./authors.json');

const { DataBase } = require('./db');

// Проверка соединения с базой
async function run() {
  await DataBase.run();

  // получение записей
  // const allAuthors = await DataBase.findAllAuthor();
  // console.log(allAuthors);
  const allBooks = await DataBase.findAllBook();
  console.log(allBooks);

  // получение записи
  // const author = await DataBase.findAuthorByID(1);
  // console.log(author);
  // const book = await DataBase.findBookByID(1);
  // console.log(book);
}

run();
