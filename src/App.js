// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import JobList from './pages/JobList';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/register" element={<Register />} />
                    {/* Add other routes as needed */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
