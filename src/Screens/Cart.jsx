import React, { useState } from 'react';
import './Cart.css';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <button onClick={() => removeFromCart(item)}>Eliminar</button>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Taza de Ceramica Crosszy', quantity: 2, price: 120 },
    { name: 'Playera Poliester (AOP)', quantity: 1, price: 300 },
    { name: 'Sudadera unisex de cuello redondo y tejido pesado', quantity: 3, price: 500 }
  ]);

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = () => {
   
    alert('Pago realizado correctamente. ¡Gracias por su compra!');
    
  };

  return (
    <div className="cart-container">
      <h1 className="title">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay elementos en el carrito</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} removeFromCart={removeFromCart} />
          ))}
          <p className="total">Total: ${calculateTotal()}</p>
          <button onClick={handlePayment}>Realizar Pago</button>
        </div>
      )}
            <footer>
      <div className="container">
        <div className="footer-content">
          <div className="crosszy-text">
            <h3 style={{ color: 'purple' }}>CROSSZY</h3>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/XCrosszy" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://www.instagram.com/omar_logem?igsh=MXVmdzkyMDZwZzJkag==" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
            <a href="https://www.tiktok.com/@xcrosszyy?_t=8mCe1yUplHZ&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className="social-icon" /></a>
            <a href="https://youtube.com/@crosszy79?si=xQemuynt29OhcR7u" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Cart;
