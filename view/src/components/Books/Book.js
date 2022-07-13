import style from './Books.module.css'

import imgBookDefault from './book.svg';

import { NavLink } from 'react-router-dom';

const Book = (props) => {
  return (
    <div className={style.book}>
      <NavLink to="/books" className={style.image}><img src={imgBookDefault} alt=""/></NavLink>
      <NavLink to="/books" className={style.name}>{props.name}</NavLink>
      <NavLink to="/authors" className={style.author}>{props.author}</NavLink>
    </div>
  );
};

export default Book;
