// In Footer.js
import React from 'react';
import './footer.css'; // Assuming you might want separate CSS for the footer.

const Footer = () => {
    return (
        <footer className="footer">
            <address>
                123 React Street<br />
                JavaScript City, JS 12345
            </address>
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
