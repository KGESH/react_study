import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarProps } from 'types/Props';

const NavbarItem = ({itemName, url}: NavbarProps) => {
  return (
    <li className="navbar__item">
      <Link to={url}>
        {itemName}
      </Link>
    </li>
  );

}

export default NavbarItem;