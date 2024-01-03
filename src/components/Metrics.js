import React from 'react';

const Metrics = () => {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <h1 style={styles.modalMainTitle}>WHO WE ARE?</h1>
        </div>
        <p style={styles.modalContent}>
          Over the years, we have consistently evolved our cutting-edge properties
          solutions, adapting to the dynamic landscape of the real estate industry.
          From our humble beginnings to becoming a trusted name in real estate technology
        </p>
        <div style={styles.modalStats}>
          <div style={styles.stat}>
            <h2 style={styles.statNumber}>+200</h2>
            <p style={styles.statText}>Clients Satisfied</p>
          </div>
          <div style={styles.stat}>
            <h2 style={styles.statNumber}>+50</h2>
            <p style={styles.statText}>Years of experience</p>
          </div>
          <div style={styles.stat}>
            <h2 style={styles.statNumber}>+5000</h2>
            <p style={styles.statText}>Properties Sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define your styles here
const styles = {
  backgroundContainer: {
    position: 'relative',
    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/2560px-Bellas_Artes_01.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    textAlign: "center",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: "4px",
    marginBottom: "128px"
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '10px',
    width: '80%',
    textAlign: 'center',
  },
  modalHeader: {
    marginBottom: '1rem',
  },
  modalTitle: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  modalMainTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  modalContent: {
    marginBottom: '2rem',
  },
  modalStats: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    margin: '0',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  statText: {
    margin: '0',
    fontSize: '1rem',
  }
};

export default Metrics;
