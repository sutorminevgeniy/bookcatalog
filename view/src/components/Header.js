import logo from '../logo.svg';
import style from'./Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <NavLink className={style.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <ul className={style.navigate}>
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
            to="/news"
            className={({ isActive }) => isActive ? style.active : undefined }>Новости</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? style.active : undefined }>О каталоге</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
