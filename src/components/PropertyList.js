import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Monter Carlo Flat',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    imageUrl: 'https://www.mydomaine.com/thmb/WLvbgTPsAoq4QPsbLkYpxy3Ugz0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OutEast-14371a850d1b4747b41a9f5ec31c7afd.jpg',
    imageWide: false
  },
  {
    id: 2,
    title: 'Patra Land Smart Home',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    imageUrl: 'https://www.mydomaine.com/thmb/nyzFcv5BeMO125ZWs4xpo3FRbek=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/costanera-1024x610-a747d459be304b8caa70e7f2653348e4.jpg',
    imageWide: false
  },
  {
    id: 3,
    title: 'Patra Land Smart Home',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    imageUrl: 'https://www.mydomaine.com/thmb/wsLfQSiWZV2haNtt_0g5MAof05Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PerlmutterFreiwald-7b1be0af77db44a48d5c6d9ef3c1f7ec.jpg',
    imageWide: true
  },
];

const PropertyCard = ({ title, address, imageUrl, imageWide}) => (
  <div style={styles.card}>
    <img src={imageUrl} alt={title} style={imageWide? styles.imageWide :styles.image} />
    <div style={styles.details}>
      <div>
        <h3>{title}</h3>
        <p>{address}</p>
      </div>
      
      <button style={styles.button}>DETAILS</button>
    </div>
  </div>
);

const PropertyList = () => (
  <section style={styles.container}>
    <h2 style={styles.header}>THE BEST PROPERTY IN THE TOWN</h2>
    <div style={styles.cardContainer}>
      {properties.slice(0,2).map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
    <div style={styles.cardContainer}>
      <PropertyCard key={3} {...properties[2]} imageWide/>
    </div>
  </section>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    color: "white",
  },
  header: {
    textAlign: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '32px',
  },
  card: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
    overflow: 'hidden',
  },
  image: {
    width: '600px',
    height: '500px'
  },
  imageWide: {
    width: '100vw',
    height: 'auto',
    maxHeight: '400px', // Maximum height of the image
    objectFit: 'cover', // Cover the container area
    objectPosition: 'center center', // Center the image within the container
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'white 1px solid',
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    height: "40px"
  },
};

export default PropertyList;
