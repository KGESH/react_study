import React from 'react';
import 'components/navbar/style/NavSearch.css';
import scope from 'resources/images/scope.png';

const NavSearch = () => {
  const searchFnc = () => {
    alert('src/components/navbar/NavSearch.tsx 를 수정해주세요.');
  };

  return (
    <div className='search__group'>
      <div className='search__group_inner'>
        <input className='search__input' type='text' />
        <img
          className='search__btn'
          onClick={searchFnc}
          src={scope}
          alt='검색'
        />
      </div>
    </div>
  );
};

export default NavSearch;
