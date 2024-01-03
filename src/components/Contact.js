import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would send formData to your server or a mail-sending service
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
    <h3>Contact</h3>
      <label style={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
      </label>
      <button type="submit" style={styles.button}>Send Message</button>
    </form>
  );
};

const styles = {
  form: {
    border: '1px solid white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Adjust as necessary
    maxWidth: '500px', // Adjust as necessary
    margin: '0 auto', // This centers the form
    marginBottom: "128px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "4px"
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '100%', // Ensures that the input fields fill the form
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    backgroundColor: 'black',
    color: "white"
  },
  textarea: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    height: '100px', // Adjust as necessary
    backgroundColor: 'black',
    color: "white"
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
  }
};

export default ContactForm;
