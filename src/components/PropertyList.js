import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Monter Carlo Flat',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/2560px-Bellas_Artes_01.jpg',
    imageWide: false
  },
  {
    id: 2,
    title: 'Patra Land Smart Home',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/2560px-Bellas_Artes_01.jpg',
    imageWide: false
  },
  {
    id: 3,
    title: 'Patra Land Smart Home',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/2560px-Bellas_Artes_01.jpg',
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
    borderRadius: '4px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto'
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
