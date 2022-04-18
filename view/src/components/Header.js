import logo from '../logo.svg';
import style from'./Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
      <ul className={style.navigate}>
        <li>Книги</li>
        <li>Авторы</li>
        <li>Жанры</li>
        <li>О каталоге</li>
      </ul>
    </header>
  );
};

export default Header;
