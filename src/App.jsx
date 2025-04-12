import React from 'react';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';
import './styles/main.scss';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
