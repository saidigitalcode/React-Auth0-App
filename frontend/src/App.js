import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import LogoutPage from './LogoutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;
