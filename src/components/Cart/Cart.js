import React from 'react';
import './Cart.css'

const Cart = ({ cart, selectHandler }) => {
    return (
        <div className='carts'>
            <div className='cart'>
                <h1>Selected Gazets :</h1>
                <ul>
                    {
                        cart.map(p => <li key={p}>{p}</li>)
                    }
                </ul>
                <button onClick={selectHandler} className='select-btn'>Select One</button>
                <button className='reset-btn'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;