// In Footer.js
import React from 'react';
import './footer.css'; 
const Footer = () => {
    return (
        <footer className="footer">
            <address>
                123 React Street<br />
                JavaScript City, 12345
            </address>
            <p>&copy; {new Date().getFullYear()} EducaApp. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
