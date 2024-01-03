import React from 'react';

const ImageHolder = ({ imageUrl }) => {
    return (
        <div style={styles.containerStyle}>
            <img src={imageUrl} alt="Displayed" style={styles.imageStyle} />
        </div>
    );
};

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        borderRadius: '4px'
    },
    imageStyle: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px'
    }
};

export default ImageHolder;
