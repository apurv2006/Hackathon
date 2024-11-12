// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Adjust as necessary

const api = axios.create({
  baseURL: API_URL,
});

export const register = (name, email, password) =>
  api.post('/register', { name, email, password });

export const login = (email, password) =>
  api.post('/login', { email, password });

export const getProtectedData = (token) =>
  api.get('/protected', { headers: { Authorization: `Bearer ${token}` } });
