import React from 'react';
import ProductContainer from 'components/product-container/ProductContainer';

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="home__title">This is title</h1>
      </div>

      <ProductContainer/>
    </>
  );

}

export default Home;
