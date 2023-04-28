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
                                src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/phones-app-transparent-large.webp"
                                alt="Fixdapp way of fixing cars"
                                layout="responsive"
                                width={800}
                                height={719}
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
