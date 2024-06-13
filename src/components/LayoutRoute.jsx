import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import HeadBar from './HeadBar/HeadBar';
import {FRONT_PAGE, LOGIN} from "../constants/clientRoute";
import FootBar from "./FootBar/FootBar";



const LayoutRoute = ({ children }) => {
    const location = useLocation();


    // Define the routes where you want to display the HeadBar
    const routesWithHeadBar = [
        '/',
        FRONT_PAGE,
        LOGIN,
    ];

    const shouldNotShowBar = routesWithHeadBar.includes(location.pathname);
    return (
        <div>
            {!shouldNotShowBar && (
                <header>
                    <HeadBar location = {location.pathname}/>
                </header>
            )}
            <main>
                <Outlet/>
            </main>

            {!shouldNotShowBar && (
                <footer>
                    <FootBar></FootBar>
                </footer>

            )}


        </div>
    );
};

export default LayoutRoute;
