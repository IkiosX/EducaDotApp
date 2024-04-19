import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { subscribeToAuthChanges } from '../../services/sessionsStorage';
import PrivateRoute from '../private_route/privateRoute';
import HomePage from '../../views/homePage';
import LogIn from '../../views/login/log-in_Page';
import Register from '../../views/register';
import Profile from '../../views/profile';

function App() {
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      console.log('Auth state changed:', user);
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        {/* Wrap the Profile page in a PrivateRoute */}
        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
