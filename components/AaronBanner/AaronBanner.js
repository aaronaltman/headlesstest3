import React from 'react';
import 'components/AaronBanner/AaronBanner.module.css';

const AaronBanner = ({ text, buttonText }) => {
    return (
        <div className="aaron-banner">
            <div className="left-column">
                <p>{text}</p>
            </div>
            <div className="right-column">
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default AaronBanner;

