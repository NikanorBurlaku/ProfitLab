import React, { useState, useEffect } from 'react';

function Preloader() {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingProgress < 100) {
                setLoadingProgress(loadingProgress + 1);
            } else {
                clearInterval(interval);
            }
        }, 25);

        return () => {
            clearInterval(interval);
        };
    }, [loadingProgress]);

    return (
        <div className="preloader">
            <img className='preloader__bulb' src='./img/bulb.svg' alt=''  />
            <img className='preloader__logo' src='./img/logo.svg' alt='' />
            <div className="progress__container">
                <div className='progress__bar' style={{ width: `${loadingProgress}%` }}></div>
            </div>
        </div>
    );
}

export default Preloader;
