import React from 'react';
import Topbar from './components/topbar/Topbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;