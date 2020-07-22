import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav text-center">
          <ShortLink to="/main" name="Главная"/>
          <ShortLink to="/time" name="Время"/>
          <ShortLink to="/sort" name="Сортировка"/>
          <ShortLink to="/weather" name="Погода"/>
        </ul>
      </div>
    </nav>
  );
};

const ShortLink = ({to,name}) => {
  return (
    <li className="nav-item">
      <NavLink to={to} className={"nav-link"} activeClassName={"active"}>{name}</NavLink>
    </li>
  )
}

export default Menu;