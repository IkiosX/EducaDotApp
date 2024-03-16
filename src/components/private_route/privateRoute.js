// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../private_route/user_access_state';

const PrivateRoute = () => {
    const { user } = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
