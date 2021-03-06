import React from 'react';
import './Cart.css'

const Cart = ({ cart, selectHandler, resetHandler }) => {
    return (
        <div className='carts'>
            <div className='cart'>
                <h2>Selected Gadgets</h2>
                <ul>
                    {
                        cart.map(p => <li key={p}>{p}</li>)
                    }
                </ul>
                <button onClick={selectHandler} className='select-btn'>Select One</button>
                <button onClick={resetHandler} className='reset-btn'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;