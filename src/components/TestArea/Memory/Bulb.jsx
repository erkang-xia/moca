import React, {useEffect, useState} from 'react';

const Bulb = ({changed}) => {


    return (
        <div className="flex justify-center space-x-20">
            <div className="relative">
                <div
                    className={`absolute top-1 left-1  w-8 h-8 rounded-full ${changed>=1 ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed>=1 ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
            <div className="relative">
                <div
                    className={`absolute top-1 left-1  w-8 h-8 rounded-full ${changed>=2 ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed>=2 ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
            <div className="relative">
                <div
                    className={`absolute top-1 left-1  w-8 h-8 rounded-full ${changed>=3 ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed>=3 ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
            <div className="relative">
                <div
                    className={`absolute top-1 left-1  w-8 h-8 rounded-full ${changed>=4 ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed>=4 ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
            <div className="relative">
                <div
                    className={`absolute top-1 left-1  w-8 h-8 rounded-full ${changed>=5 ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed>=5 ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
        </div>


    )
}
export default Bulb;