import React from 'react';
import NavbarItem from './NavbarItem';
import 'components/navbar/style/NavHiddenItem.css';

type NavInnerProp = {
  item: string;
};

const NavHiddenItem = ({ item }: NavInnerProp) => {
  if (item === 'product') {
    return (
      <ul id={item} className='none nav__hidden_list'>
        <NavbarItem itemName='상품 1' url='/a' />
        <NavbarItem itemName='상품 ---' url='/b' />
        <NavbarItem itemName='C 상품' url='/c' />
        <NavbarItem itemName='PRODUCT' url='/d' />
      </ul>
    );
  }
  if (item === 'coffee') {
    return (
      <ul id={item} className='none nav__hidden_list'>
        <NavbarItem itemName='원두커피' url='/a' />
        <NavbarItem itemName='아이스 커피' url='/b' />
        <NavbarItem itemName='커피' url='/c' />
        <NavbarItem itemName='COFFEE' url='/d' />
      </ul>
    );
  }
  if (item === 'goods') {
    return (
      <ul id={item} className='none nav__hidden_list'>
        <NavbarItem itemName='A GOODS' url='/a' />
        <NavbarItem itemName='상품 1231' url='/b' />
        <NavbarItem itemName='상품 --123' url='/c' />
        <NavbarItem itemName='124214124' url='/d' />
      </ul>
    );
  }
  if (item === 'collection') {
    return (
      <ul id={item} className='none nav__hidden_list'>
        <NavbarItem itemName='AAAAAAAA' url='/a' />
        <NavbarItem itemName='BBBBBBBB' url='/b' />
        <NavbarItem itemName='CCCCCCCC' url='/c' />
        <NavbarItem itemName='DDDDDDDD' url='/d' />
      </ul>
    );
  }
  if (item === 'subscription') {
    return (
      <ul id={item} className='none nav__hidden_list'>
        <NavbarItem itemName='AAAAAAAA' url='/a' />
        <NavbarItem itemName='BBBBBBBB' url='/b' />
        <NavbarItem itemName='CCCCCCCC' url='/c' />
        <NavbarItem itemName='DDDDDDDD' url='/d' />
      </ul>
    );
  }
  return <></>;
};

export default NavHiddenItem;
