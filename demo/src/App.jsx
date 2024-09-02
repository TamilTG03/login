import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Ensure this is the correct path
import Register from './Regg'; // Ensure this is the correct path

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Regg" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
