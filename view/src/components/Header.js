import logo from '../logo.svg';
import style from'./Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
      <ul className={style.navigate}>
        <li><a href="">О каталоге</a></li>
        <li><a href="">Книги</a></li>
        <li><a href="">Авторы</a></li>
        <li><a href="">Жанры</a></li>
      </ul>
    </header>
  );
};

export default Header;
