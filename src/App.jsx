import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuAppBar from '../components/toolbar';
import Deposito from '../pages/deposito';
import Saque from '../pages/saque';
import Account from '../pages/account';

function App() {
  return (
    <Router>
      <MenuAppBar />
      <Routes>
        <Route path="/deposito" element={<Deposito />} />
        <Route path="/saque" element={<Saque />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;