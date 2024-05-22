import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from "./components/pages/Login";
import PrivateRoute from "./components/design/PrivateRoute";
import Home from "./components/Home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
        </Routes>
    );
};

export default App;