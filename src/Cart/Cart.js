import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.subtotal.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
