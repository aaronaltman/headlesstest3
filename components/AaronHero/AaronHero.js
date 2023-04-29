import React from 'react';

import styles from './AaronHero.module.scss';

const AaronHero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.leftCol} col-md-6`}>
                        {/* Removed Image component */}
                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.content}>
                            <h1 className={styles.heading}>Save money on vehicle repairs & car mechanic bills</h1>
                            <p className={styles.text}>
                                The FIXD sensor and free app tells you why your check engine light is on to help you save time and money
                            </p>
                            <button className={styles.button}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AaronHero;
