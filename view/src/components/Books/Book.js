import imgBookDefault from './book.svg';

const Book = (props) => {
  return (
    <div className="book">
      <img src={imgBookDefault} alt=""/>
      <a href="" className="name">{props.name}</a>
      <a href="" className="author">{props.author}</a>
    </div>
  );
};

export default Book;
