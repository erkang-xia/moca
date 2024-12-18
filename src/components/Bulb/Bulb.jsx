import React from 'react';

const Bulb = ({ changed, numberOfBulbs }) => {
    const bulbs = [];

    for (let i = 1; i <= numberOfBulbs; i++) {
        bulbs.push(
            <div key={i} className="relative">
                <div
                    className={`absolute top-1 left-1 w-8 h-8 rounded-full ${changed >= i ? 'bg-primaryGreen opacity-50' : 'bg-primaryBlueMedium'}`}></div>
                <div
                    className={`absolute w-10 h-10 blur opacity-50 rounded-full ${changed >= i ? 'bg-primaryGreen' : 'hidden'}`}></div>
            </div>
        );
    }

    return (
        <div className="flex justify-center space-x-20">
            {bulbs}
        </div>
    );
};

export default Bulb;
