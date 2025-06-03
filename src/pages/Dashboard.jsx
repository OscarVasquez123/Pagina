// src/pages/Dashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">Panel Principal</h1>
        <p className="text-gray-700">
          Bienvenido al sistema Cigarra.Net. Aquí puedes gestionar empleados, ver reportes, controlar inventario y más.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
