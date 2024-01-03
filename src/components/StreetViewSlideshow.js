import React, { useState } from 'react';

const locationsData = [
  {
    id: 1,
    name: 'La Iglecia',
    address: 'Address, City, 12345',
    link: "https://www.google.com/maps/embed?pb=!4v1704241626454!6m8!1m7!1sCAoSLEFGMVFpcFA4eHcwc1g4WjVSOUpIekt3OGVvSjdDR00wM1hOZ3FOeHpuNkhP!2m2!1d21.782298!2d-103.3062403!3f161.56633399227303!4f1.1589625258377367!5f0.7820865974627469",
  },
  {
    id: 2,
    name: 'El Jardin',
    address: 'Address, City, 12345',
    link: "https://www.google.com/maps/embed?pb=!4v1704241675948!6m8!1m7!1sCAoSLEFGMVFpcE5pSF9hVGhkLVY4eFhKb0tFRmVKeGFpeGM3bjVnb0RjdW1HVEE4!2m2!1d21.7826061!2d-103.30616!3f39.29846495883358!4f-81.5807384133799!5f0.7820865974627469",
  },
  // Add more locations as needed
];

const StreetViewSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLocation = locationsData[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : locationsData.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < locationsData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div style={styles.slideshowContainer}>

      <div style={styles.subContainer}>
        <button onClick={goToPrevious} style={styles.arrowButton}>&#10094;</button>
        <iframe
          src={currentLocation.link}
          width="600"
          height="450"
          style={styles.iframeStyle}
          allowFullScreen
          loading="lazy"
          title={currentLocation.name}
        />
        <button onClick={goToNext} style={styles.arrowButton}>&#10095;</button>
      </div>
      <div style={styles.details}>
        <div>
          <h3>{currentLocation.name}</h3>
          <p>{currentLocation.address}</p>
        </div>
        
        <button style={styles.button}>DETAILS</button>
      </div>
    </div>
  );
};

const styles = {
  slideshowContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column', // Arrange items in a column
    alignItems: 'center', // Center-align items
    backgroundColor: '#000',
    marginBottom: "128px"
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the child elements (the iframe and buttons)
    alignItems: 'center', // Vertically center the child elements
    backgroundColor: '#000', // Assuming a dark background is preferred
    gap: "32px"
  },
  locationInfo: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '20px', // Add some space above the iframe
  },
  locationName: {
    fontSize: '24px',
    margin: 0,
  },
  locationAddress: {
    fontSize: '16px',
    margin: 0,
  },
  iframeStyle: {
    border: '0',
    borderRadius: '4px',
    zIndex: 1,
  },
  arrowButton: {
    cursor: 'pointer',
    padding: '10px',
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    zIndex: 2,
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    width: "600px"
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

export default StreetViewSlideshow;
