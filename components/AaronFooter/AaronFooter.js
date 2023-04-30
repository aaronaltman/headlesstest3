import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from 'components/AaronFooter/AaronFooter.module.scss';
import Link from 'next/link';

let cx = classNames.bind(styles);

function AaronFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}>
                <div className={cx('logo-container')}>
                    <div className={cx('logo')}>
                        <Link href="/">
                            <a title="Home">
                                <Image
                                    src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                                    width={300}
                                    height={96}
                                    alt="FixdappLogo"
                                    layout="responsive"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.column2}>
                <h2>About</h2>
                <ul>
                    <li>About FIXD</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className={styles.column3}>
                <h2>Contact Us</h2>
                <p>(925) 854-1766</p>
                <p>support@fixdapp.com</p>
                <p>999 Peachtree St NE Suite 840, Atlanta, GA 30309</p>
            </div>
            <div className={styles.column4}>
                <h2>Help</h2>
                <ul>
                    <li>Help Center</li>
                    <li>Contact Support</li>
                    <li>FIXD app and sensor FAQ</li>
                    <li>Returns and warranty</li>
                    <li>Manage subscription</li>
                </ul>
            </div>
            <div className={styles.column5}>
                <h2>Legal</h2>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Advertising Disclosure</li>
                </ul>
            </div>
        </div>
    );
}

export default AaronFooter;
