import React from 'react';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuthenticated = !!localStorage.getItem('token');
//TODO increase security
    return isAuthenticated ? children : <Navigate to="/"/>;
};

export default PrivateRoute;
