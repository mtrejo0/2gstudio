import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footerStyle}>
            <div style={styles.sidePanelStyle}>
                <p>Contact Us.</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: arqmanuelgo55@hotmail.com</p>
                <p>Address: Tlaltenango, Zac</p>
            </div>
            <p>© 2024 2G Studio Arquitectura</p>
        </footer>
    );
};

const styles = {
    footerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '32px',
        left: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-evenly', // Aligns the content and side panel
        borderTop: "1px white solid"
    },
    sidePanelStyle: {
        textAlign: 'left' // Aligns the contact information to the right
    }
};

export default Footer;
