import React from 'react';
import Image from 'next/image';

import styles from './AaronHero.module.scss';

const AaronHero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.image}>
                            <Image
                                src="/public/static/fixdapp-logo.webp"
                                alt="Hero image"
                                layout="responsive"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.content}>
                            <h1 className={styles.heading}>Welcome to my website!</h1>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante eu tristique pharetra, eros velit suscipit tortor, a porttitor ipsum turpis eu eros. Quisque vitae libero pharetra, congue sapien a, ultricies est. Fusce bibendum magna a risus eleifend interdum.
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
