import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
            <p><a href="/about">關於我們</a></p>
            <p>電子郵件: <a href="mailto:info@example.com">info@example.com</a></p>
            <p><a href="https://www.facebook.com/yourfacebookpage">Facebook 頁面</a></p>
            <p><a href="/contact">聯繫我們</a></p>
        </footer>
    );
};

export default Footer;