import Author from './Author';

const Authors = () => {
  return (
    <div className="author">
      <div className="authorList">
        <Author author="Автор 1" countBooks="11" />
        <Author author="Автор 2" countBooks="12" />
        <Author author="Автор 3" countBooks="13" />
      </div>
    </div>
  );
};

export default Authors;
