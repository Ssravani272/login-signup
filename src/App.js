import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home.jsx'; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp"element={<SignUp />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
