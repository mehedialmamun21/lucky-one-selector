import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <div>
                    <a href="management">Management</a>
                    <a href="/about-us">About us</a>
                </div>
                <div className='store-name'>
                    <h1>LAPTOP BAZAR</h1>
                </div>
                <div>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;