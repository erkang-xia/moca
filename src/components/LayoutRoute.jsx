import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import HeadBar from './HeadBar/HeadBar';
import {FRONT_PAGE, LOGIN} from "../constants/clientRoute";


const LayoutRoute = ({ children }) => {
    const location = useLocation();

    // Define the routes where you want to display the HeadBar
    const routesWithHeadBar = [
        '/',
        FRONT_PAGE,
        LOGIN,
    ];

    const shouldNotShowHeadBar = routesWithHeadBar.includes(location.pathname);
    console.log("here i checked ")
    return (
        <div>
            {!shouldNotShowHeadBar && (

                <header>
                    <HeadBar />
                </header>
            )}
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutRoute;
