import React from 'react';
import { FaWhatsapp, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
return (
<footer className="footer-container">
<div className="footer-content">
<div className="social-icons">
<a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
<FaWhatsapp className="footer-icon" />
</a>
<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
<FaTwitter className="footer-icon" />
</a>
<a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
<FaFacebookF className="footer-icon" />
</a>
</div>
<p className="footer-text">© {new Date().getFullYear()} Barabiiy. All rights reserved.</p>
</div>
</footer>
);
};

export default Footer;


