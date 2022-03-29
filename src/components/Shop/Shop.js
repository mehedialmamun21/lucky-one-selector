import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Asus ExpertBook', img: "images/lap1.jpg", price: 75000 },
        { id: 2, name: 'HP Pavilion X360', img: "images/lap2.jpg", price: 70000 },
        { id: 3, name: 'Dell Inspiron 15', img: "images/lap3.jpg", price: 68000 },
        { id: 4, name: 'Asus X515MA', img: "images/lap4.jpg", price: 65000 },
        { id: 5, name: 'Lenovo IdeaPad', img: "images/lap5.jpg", price: 60000 },
        { id: 6, name: 'HP Envy X360', img: "images/lap6.jpg", price: 55000 },
        { id: 7, name: 'Apple MacBook Pro', img: "images/lap7.jpg", price: 50000 },
        { id: 8, name: 'Acer Nitro 7', img: "images/lap8.jpg", price: 45000 },
        { id: 9, name: 'Asus Zenbook', img: "images/lap9.jpg", price: 45000 }
    ]
    const handleAddToCart = (product) => {
        if (!(cart.indexOf(product.name) === -1)) {
            window.alert('already added');
            return
        }
        const newCart = [...cart, product.name];
        setCart(newCart);
    }

    const selectHandler = () => {
        const randomCart = Math.floor(Math.random() * cart.length);
        setCart([cart[randomCart]])
    }

    const resetHandler = () => {
        const cart = [];
        setCart(cart);
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
                <Cart cart={cart} selectHandler={selectHandler} resetHandler={resetHandler}></Cart>
            </div>
        </div>
    );
};
export default Shop;