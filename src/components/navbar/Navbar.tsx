import { type } from 'os';
import React, { useState } from 'react';
import NavbarItem from 'components/navbar/NavbarItem';
import 'components/navbar/style/Navbar.css';

type Props = {
  isLoggedIn: boolean,
};

const Navbar = ({isLoggedIn}: Props) => {
  const [isLogin, setIsLogin] = useState(isLoggedIn);

  
  return (
    <div className="navbar">
      <ul className="navbar__item_list">
        <NavbarItem itemName="Home" url="/"/>
        { isLogin ? (
            <NavbarItem itemName="LogOut" url="/"/>

        ) : (

            <NavbarItem itemName="LogIn" url="Login"/>
        )}

        <NavbarItem itemName="Store" url="Store"/>
        <NavbarItem itemName="PickUp" url="PickUp"/>
      </ul>
    </div>
  );


}

export default Navbar;