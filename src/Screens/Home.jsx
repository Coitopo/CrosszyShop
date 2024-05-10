import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const links = [
  {
    name: "Productos",
    href: "/Products"
  },
];

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Taza de Ceramica Crosszy',
      price: 120,
      image: '../assets/Taza1.png'
    },
    {
      id: 2,
      name: 'Playera Poliester (AOP)',
      price: 300,
      image: '../assets/Pla1.png'
    },
    {
      id: 3,
      name: 'Sudadera unisex de cuello redondo y tejido pesado',
      price: 500,
      image: '../assets/Suda1.png'
    }
  ];

  return (
    <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ color: '#8a63d2', fontSize: '2rem' }}>La Tienda Oficial de Crosszy</h2>
        <p style={{ color: '#8a63d2', fontSize: '1rem' }}>¡Cómpralo antes de que se agoten!</p>
        <h3 style={{ color: '#8a63d2', fontSize: '2rem', marginTop: '20px' }}>Más Vendidos</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
         
          {featuredProducts.map((product, index) => (
            <div key={index}>
              <Link to={links[0].href}>
                <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px', borderRadius: '5px' }} />
                <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>{product.name}</p>
                <p style={{ fontSize: '1.5rem', color: 'green' }}>Precio: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
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

export default Home;

