const Sequelize = require('sequelize');

// Настройка соединения с базой
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

// Создание моделей таблиц
const Model = Sequelize.Model;

class Author extends Model {}
Author.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false // allowNull defaults to true
  },
  middleName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'Author'
});

class Book extends Model {}
Book.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false // allowNull defaults to true
  },
  description: {
    type: Sequelize.TEXT
  },
  author_id: {
    type: Sequelize.INTEGER,
    references: {
      // ссылка на другую модель
      model: Author,
      // название колонки модели-ссылки с первичным ключом
      key: 'id',
    }
  }
}, {
  sequelize,
  modelName: 'Book'
});

module.exports = {
    sequelize,
    Author,
    Book
};