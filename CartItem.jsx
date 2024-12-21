import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
