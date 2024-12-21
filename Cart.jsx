import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux state
  const dispatch = useDispatch(); // Initialize dispatch function

  // If the cart is empty, show a fallback message
  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  // Render the list of cart items with functionality
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{item.title}</h3>
          <img src={item.thumbnail} alt={item.title} width="100" />
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <div>
            <button onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity <= 1}>
              -
            </button>
            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        <h3>
          Total Price: ₹
          {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
