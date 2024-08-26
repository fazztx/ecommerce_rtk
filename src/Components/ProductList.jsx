import React from 'react';
import './ProductList.css'; 

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';

//Front-end component
const ProductList = () => {

  //Declaration of array that holds objects with attributes: id, name, price
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

  const handleAddToCart = product => {
    dispatch(addItemToCart(product)); //Delegates function logic to slice
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">

        {products && products.map( (item, index) => (
          <li key={index} className='product-list-item'>
            <span>{item.name} - ${item.price}</span>

            <button
              className={`add-to-cart-btn ${disabledProducts.includes(item.id) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(item)}
              disabled={disabledProducts.includes(item.id)} > {/* // Disable button if product is in disabledProducts */}
              Add to Cart
            </button>

          </li>
        ))}

      </ul>
    </div>
  );
};

export default ProductList;
