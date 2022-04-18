import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="navigate">
        <li>Книги</li>
        <li>Авторы</li>
        <li>Жанры</li>
        <li>О каталоге</li>
      </ul>
    </header>
  );
};

export default Header;
