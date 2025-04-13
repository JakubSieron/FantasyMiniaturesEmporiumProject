import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>You are logged in as <strong>{user?.email}</strong></p>
    </div>
  );
}
