import ProductItems from 'components/product-container/ProductItems';
import 'components/product-container/style/ProductContainer.css';

const ProductContainer = () => {
  const log = () => {
    alert('clicked');
  };

  const ShowProducts = ProductItems.map((productItem) => (
    <li>
      <div className='productContainer'>
        <div className='productImageBox' onClick={log}>
          <img
            className='productImage'
            src={productItem.productImagePath}
            alt='NoImage'
          />
        </div>
        <div className='productNameBox'>
          <div className='productName' onClick={log}>
            <p>{productItem.productName}</p>
          </div>
        </div>
        <div className='productIconBox'>
          <img
            className='ProductImage'
            src={productItem.productIconPath}
            alt='NoIcon'
          />
        </div>
        <div className='productPriceBox'>
          <span className='productPrice'>{productItem.productPrice}</span>
          <strong>
            <span className='productDiscountPrice'>
              {productItem.productDiscountPrice}
            </span>
          </strong>
        </div>
        <div className='productButtonBox'>
          <button className='productBuyButton'>구매하기</button>
          <button className='producBasketButton'>장바구니</button>
        </div>
      </div>
    </li>
  ));

  return (
    <div className='productListBoard'>
      <div className='productListItem'>
        <ul>{ShowProducts}</ul>
      </div>
    </div>
  );
};

export default ProductContainer;
