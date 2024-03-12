import React from 'react';
import 'animate.css/animate.css';

import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <section style={styles.errorPage}>
        <div style={styles.container} className="animate__animated animate__fadeIn">
          <h1 style={styles.header}>
            404
          </h1>
          <h2 style={styles.subHeader}>
            Sorry! Page Not Found
          </h2>
          <p style={styles.paragraph}>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, we will look into it.
          </p>
          <div style={styles.btnContainer}>
            <NavLink to='/' style={styles.btn}>Return HOME</NavLink>
            <NavLink to='/contact' style={styles.btn}>Report Problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  errorPage: {
    background: 'linear-gradient(120deg, #f8f9fa, #ced4da)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#dc3545',
    margin: '0',
  },
  subHeader: {
    fontSize: '2rem',
    color: '#343a40',
    margin: '10px 0',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#6c757d',
    margin: '10px 0',
  },
  btnContainer: {
    marginTop: '20px',
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginRight: '10px',
    transition: 'background-color 0.5s ease',
  },
};

export default Error;
