import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuAppBar from '../components/toolbar';
import Deposito from '../pages/deposito';
import Saque from '../pages/saque';

function App() {
  return (
    <Router>
      <MenuAppBar />
      <Routes>
        <Route path="/deposito" element={<Deposito />} />
        <Route path="/saque" element={<Saque />} />
      </Routes>
    </Router>
  );
}

export default App;