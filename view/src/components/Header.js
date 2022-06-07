import logo from '../logo.svg';
import style from'./Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
      <ul className={style.navigate}>
        <li className={style.navItem}>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? style.active : undefined }>О каталоге</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink 
            to="/books"
            className={({ isActive }) => isActive ? style.active : undefined }>Книги</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink
            to="/authors"
            className={({ isActive }) => isActive ? style.active : undefined }>Авторы</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink
            to="/genre"
            className={({ isActive }) => isActive ? style.active : undefined }>Жанры</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
