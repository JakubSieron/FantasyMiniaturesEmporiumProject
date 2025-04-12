import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import './styles/main.scss';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
