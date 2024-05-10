import React, { useState, useRef } from 'react';
import './Products.css';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const ProductSummary = ({ name, price, description, image }) => {
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000); // Mostrar el mensaje de confirmación por 2 segundos
  };

  return (
    <div className="product">
      <h2 style={{ color: '#8a63d2' }}>{name}</h2>
      <img src={image} alt={name} />
      <p style={{ color: 'purple' }}>Precio: ${price}</p>
      <p style={{ color: '#8a63d2' }}>{description}</p>
      <label htmlFor="quantity" style={{ color: 'purple' }}>Cantidad:</label>
      <input type="number" id="quantity" min="1" value={quantity} onChange={handleQuantityChange} />
      <button style={{ backgroundColor: '#8a63d2' }} onClick={handleAddToCart}>Añadir al carrito</button>
      {showConfirmation && <p style={{ color: 'green', marginTop: '10px' }}>Se añadió correctamente al carrito</p>}
    </div>
  );
};



const ProductList = ({ cartItems, setCartItems }) => {
  const products = [
    {
      name: 'Taza de Ceramica Crosszy',
      price: 120,
      description: "¡Prepárate con una buena taza de tu bebida favorita en esta taza de café de cerámica personalizada! Personalízala con diseños de tu streamer favorito Crosszy!. Es libre de BPA y plomo, seguro para microondas y lavavajillas, y está hecho de cerámica blanca duradera en tamaños de 11 onzas y 15 onzas. Gracias a la tecnología de impresión avanzada, tus diseños cobran vida con colores increíblemente vivos: el regalo perfecto para los amantes del café, el té y el chocolate",
      images: ['../assets/Taza1.png', '../assets/Taza2.png'],
    },
    {
      name: 'Playera Poliester (AOP)',
      price: 300,
      description: 'La vibrante impresión en todo el frente y la parte posterior de esta camiseta la convierte en una pieza destacada instantánea en cualquier guardarropa. Hecha con un 100% de poliéster cepillado sedoso, estas camisetas son cómodas y diseñadas para resistir encogimiento y decoloración. Todos los paneles están cortados y cosidos por artesanos expertos para una impresión perfecta de la imagen y un ajuste excelente.',
      images: ['../assets/Pla1.png', '../assets/Pla2.png', '../assets/Pla3.png'],
    },
    {
      name: 'Sudadera unisex de cuello redondo y tejido pesado',
      price: 500,
      description: 'Ideal para cualquier situación, una sudadera unisex de cuello redondo y tejido pesado es pura comodidad. Estas prendas están hechas de poliéster y algodón. Esta combinación ayuda a que los diseños salgan frescos y hermosos. El cuello está tejido con costilla, por lo que conserva su forma incluso después del lavado. No hay costuras laterales que piquen en estos suéteres.',
      images: ['../assets/Suda1.png', '../assets/Suda2.png'],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
    
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddToCart = (productName, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => item.name === productName);
  
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { name: productName, quantity }]);
    }
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="product-list">
      <h1 className="title" style={{ color: '#8a63d2' }}>Lista de Productos</h1>
      {products.map((product, index) => (
        <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
          <h3 className="product-name" style={{ color: '#8a63d2' }}>{product.name}</h3>
          <img className="product-image" src={product.images[0]} alt={product.name} />
          <p className="product-price" style={{ color: '#8a63d2' }}>Precio: ${product.price}</p>
        </div>
      ))}

      {showDetails && selectedProduct && (
        <div ref={detailsRef}>
          <ProductSummary
            name={selectedProduct.name}
            price={selectedProduct.price}
            description={selectedProduct.description}
            image={selectedProduct.images[0]}
            onAddToCart={handleAddToCart} 
          />
        </div>
      )}

      {showDetails && (
        <button onClick={handleCloseDetails}>Cerrar detalles</button>
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

export default ProductList;




