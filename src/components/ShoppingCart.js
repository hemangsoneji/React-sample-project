import React from 'react';
import Link from '@mui/material/Link';

export const ShoppingCart = () => {
    return (
        <div>
            <header>
                <div class="grid-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto auto auto',
                    backgroundColor: 'lightblue',
                    height: '50px',
                    padding: '10px'
                }}>
                    <div class="grid-item" style={{
                        fontSize: '20px',
                        textAlign: 'center'
                    }}><Link href="/">Home</Link></div>
                    <div class="grid-item" style={{
                        fontSize: '20px',
                        textAlign: 'center'
                    }}><Link href="/about">About</Link></div>
                    <div class="grid-item" style={{
                        fontSize: '20px',
                        textAlign: 'center'
                    }}><Link href="/contact">Contact</Link></div>
                    <div class="grid-item" style={{
                        fontSize: '20px',
                        textAlign: 'center'
                    }}><Link href="/todolist">To Do List</Link></div>
                    <div class="grid-item" style={{
                        fontSize: '20px',
                        textAlign: 'center'
                    }}><Link href="/shoppingcart">Cart</Link></div>
                </div>
            </header>
        </div>
    )
}

export default ShoppingCart;