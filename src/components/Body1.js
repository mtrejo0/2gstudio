import React from 'react';

const Body1 = () => {
    return (
        <div style={styles.container}>
             <p style={styles.tagline}>
                 Revolutionizing architecture and design for a sustainable future.
             </p>
            <p style={styles.title}>
                2G STUDIO
            </p>
            <img 
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/2560px-Bellas_Artes_01.jpg'}
                style={styles.image}
                alt="Architecture"
            />
        </div>
    );
};

const styles = {
    container: {
        color: "white",
        textAlign: "center",
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    tagline: {
        fontSize: "24px",
        paddingTop: "64px",
        marginBottom: "64px"
    },
    title: {
        fontSize: "15vw",
        fontWeight: "bold",
        marginBottom: "64px",
        marginTop: "64px"
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
    }
};

export default Body1;
