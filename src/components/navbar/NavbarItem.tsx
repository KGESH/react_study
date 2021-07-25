import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarProps} from 'types/Props';

const NavbarItem = ({itemName, url}: NavbarProps) => (
        <li className='nav__link'>
            <Link to={url}>
                {itemName}
            </Link>
        </li>
    )

export default NavbarItem;