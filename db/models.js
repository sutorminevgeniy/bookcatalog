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
}, {
  sequelize,
  modelName: 'Book'
});

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = {
    sequelize,
    Author,
    Book
};