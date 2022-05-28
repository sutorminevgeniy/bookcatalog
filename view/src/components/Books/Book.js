import imgBookDefault from './book.svg';

const Book = () => {
  return (
    <div className="book">
      <img src={imgBookDefault} />
      <a href="" className="name">Книгa</a>
      <a href="" className="author">Автор</a>
    </div>
  );
};

export default Book;
