import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    const { img, name, price } = product;
    return (
        <div>
            <div className='product'>
                <img src={img} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>Price : ${price}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className='btn-crt'>
                    <p className='btn-txt'>ADD TO CART</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;