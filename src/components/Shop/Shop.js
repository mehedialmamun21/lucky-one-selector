import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'asus pro', img: "images/lap1.jpg", price: 75000 },
        { id: 2, name: 'hp max', img: "images/lap2.jpg", price: 70000 },
        { id: 3, name: 'dell y3', img: "images/lap3.jpg", price: 68000 },
        { id: 4, name: 'asus xoo', img: "images/lap4.jpg", price: 65000 },
        { id: 5, name: 'lenovo wisten', img: "images/lap5.jpg", price: 60000 },
        { id: 6, name: 'hp pavilion', img: "images/lap6.jpg", price: 55000 },
        { id: 7, name: 'apple mac', img: "images/lap7.jpg", price: 50000 },
        { id: 8, name: 'hp autt', img: "images/lap8.jpg", price: 45000 },
        { id: 9, name: 'asus zenbook', img: "images/lap9.jpg", price: 45000 }
    ]
    const handleAddToCart = (product) => {
        setCart([...cart, product.name]);
    }
    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Selected Gazets :</h1>
                <ul>
                    {
                        cart.map(p => <li>{p}</li>)
                    }
                </ul>
                <button className='select-btn'>Select One</button>
                <button className='reset-btn'>Reset</button>
            </div>

        </div>
    );
};
export default Shop;