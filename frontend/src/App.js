import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useState } from 'react';


import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Dashboard from './pages/dashboard/Dashboard';
import SmartBio from './pages/smartbio/SmartBio';
import Layout from './pages/layout/Layout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ChangePassword from './pages/change-password/ChangePassword';
import ForgotPassword from './pages/forgot-password/ForgotPassword';


function App() {

    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);

    return (
        <AppContext.Provider value={{ user, setUser, users, setUsers }}>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/smartbio/:id" element={<SmartBio />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/change-password" element={<ChangePassword />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </AppContext.Provider>
    );
}

export default App;
