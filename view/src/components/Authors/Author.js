import imgAuthorDefault from './author.svg';

const Author = (props) => {
  return (
    <div className="author">
      <img src={imgAuthorDefault} alt=""/>
      <a href="" className="author">{props.author}</a>
      <div>Книг: <a href="" className="countBooks">{props.countBooks}</a></div>
    </div>
  );
};

export default Author;
