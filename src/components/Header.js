import React from 'react';

const Header = () => {
    return (
        <header style={styles.headerStyle}>
            <h1>2G STUDIO</h1>
        </header>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        borderBottom: "1px white solid"
    }
};

export default Header;
