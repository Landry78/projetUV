import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OwnerPage from './OwnerPage';
import PublishPage from './PublishPage';
import Ins from './components/Ins';
import AdminPage from './AdminPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OwnerPage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/inscrire" element={<Ins />} />
      </Routes>
    </Router>
  );
};

export default App;
