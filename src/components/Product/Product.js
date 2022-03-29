import React from 'react';
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
                    <p className='btn-txt'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;