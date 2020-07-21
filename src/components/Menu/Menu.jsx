import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div><NavLink to="/main">Главная</NavLink></div>
      <div><NavLink to="/time">Время</NavLink></div>
      <div><NavLink to="/sort">Сортировка</NavLink></div>
    </div>
  );
};

export default Menu;