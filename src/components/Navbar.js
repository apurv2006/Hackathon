// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      <Link style={styles.link} to="/">Home</Link>
      {!token ? (
        <>
          <Link style={styles.link} to="/register">Register</Link>
          <Link style={styles.link} to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link style={styles.link} to="/jobs">Job Listings</Link>
          <button style={styles.logoutButton} onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#333',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  },
  logoutButton: {
    color: 'white',
    backgroundColor: '#f44336',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  }
};

export default Navbar;
