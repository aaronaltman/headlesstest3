import React from 'react';
import styles from 'components/AaronBanner/AaronBanner.module.scss';

const AaronBanner = ({ text, buttonText }) => {
    return (
        <div className={styles.aaronBanner}>
            <div className={styles.leftColumn}>
                <p>{text}</p>
            </div>
            <div className={styles.rightColumn}>
                <button className={styles.button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default AaronBanner;


