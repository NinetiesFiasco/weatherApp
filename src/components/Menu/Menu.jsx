import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div><NavLink to="/main">main</NavLink></div>
      <div><NavLink to="/tst">tst</NavLink></div>
    </div>
  );
};

export default Menu;