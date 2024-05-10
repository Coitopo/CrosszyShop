import React from "react";
import './Who.css';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Who = () => {
    const handleClick = () => {
        window.location.href = 'https://www.twitch.tv/crosszy';
    };

    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1 style={{ color: '#8a63d2', textAlign: 'center', marginBottom: '0' }}>Quiénes Somos</h1>
                <p style={{ color: '#8a63d2', textAlign: 'center', marginTop: '10px' }}>Hola! Me llamo Omar, tengo 22 años, me pasan un sin fin de cosas y la neta me la paso bien padre, SE HACEN STREAMS TODOS LOS DIAS A PARTIR DE LAS 6 PM CDMX. Únete de la banda de los DinoNuggets</p>
                <button style={{ backgroundColor: '#8a63d2', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', display: 'block', margin: '10px auto 0' }} onClick={handleClick}>Contacto</button>
            </div>
            <div className="about-us-video">
                <video controls style={{ width: '100%', height: 'auto' }}>
                    <source src="../assets/CrosszyVideo.mp4" type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                </video>
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
        </div>
    );
};

export default Who;


