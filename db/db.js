const { sequelize } = require('./config');
const { Author, Book } = require('./models');

class DataBase {
  // Проверка соединения с базой
  static async run() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  // создание записи автора
  static async createAuthor(row) {
    const author = await Author.create(row);

    return author.toJSON();
  }
  // создание записей авторов
  static async createAuthors(rows) {
    const authors = await Author.bulkCreate(rows);

    return authors.map(item => item.toJSON());
  }
  // получение автора по id
  static async findAuthorByID(id) {
    const author = await Author.findOne({
      where: { id },
      include: Book,
    });

    return author.toJSON();
  }
  // получение всех авторов
  static async findAllAuthor(orderField = 'lastName', orderDirect = 'ASC') {
    const allAuthors = await Author.findAll({
      attributes: ['lastName', 'firstName', 'middleName', 'id'],
      order: [
        [ orderField, orderDirect ], // Сортировка по возрастанию/убыванию ('ASC'/'DESC')
      ],
    });

    return allAuthors.map(item => item.toJSON());
  }

  // создание записи книги
  static async createBook(row) {
    const book = await Book.create(row);

    return book.toJSON();
  }
  // создание записей книг
  static async createBooks(rows) {
    const books = await Book.bulkCreate(rows);

    return books.map(item => item.toJSON());
  }
  // получение книги по id
  static async findBookByID(id) {
    const book = await Book.findOne({
      where: { id },
      include: Author,
    });

    return book.toJSON();
  }
  // получение всех книг
  static async findAllBook(orderField = 'name', orderDirect = 'ASC') {
    const allBooks = await Book.findAll({
      attributes: ['name', 'id'],
      order: [
        [ orderField, orderDirect ], // Сортировка по возрастанию/убыванию ('ASC'/'DESC')
      ],
      include: Author,
    });

    return allBooks.map(item => item.toJSON());
  }

  // закрытие соединения
  static close() {
    sequelize.close()  
  }
}

module.exports = { DataBase };

