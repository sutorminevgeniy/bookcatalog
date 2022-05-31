import Book from './Book';

const Books = () => {
  return (
    <div className="books">
      <div className="bookList">
        <Book name="Книга 1" author="Автор 1"/>
        <Book name="Книга 2" author="Автор 2"/>
        <Book name="Книга 3" author="Автор 3"/>
      </div>
    </div>
  );
};

export default Books;
