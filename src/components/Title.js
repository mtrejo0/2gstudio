import React from 'react';

const Title = () => {
    return (
        <div style={styles.container}>
             <p style={styles.tagline}>
                 Revolutionizing architecture and design for a sustainable future.
             </p>
            <p style={styles.title}>
                2G STUDIO
            </p>
            <img 
                src={'https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg'}
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

export default Title;
