import style from './Books.module.css'

import Book from './Book';

import Reviews from '../Reviews/Reviews';

const Books = () => {
  return (
    <div className="books">
      <div className={style.bookList}>
        <Book name="Книга 1" author="Автор 1"/>
        <Book name="Книга 2" author="Автор 2"/>
        <Book name="Книга 3" author="Автор 3"/>
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default Books;
