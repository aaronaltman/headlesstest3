import React from 'react';
import 'components/FixdappFooter/FixdAppFooter.js';
import Image from "next/image"; // Import the CSS file
import styles from 'components/FixdappFooter/FixdAppFooter.module.scss';

function AaronFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col1}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                                alt="logo"
                                width={300}
                                height={96}
                            />
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <h2 className={styles.localh2}>ABOUT</h2>
                        <ul className={styles.localul}>
                            <li>About FIXD</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className={styles.col3}>
                        <h2 className={styles.localh2}>CONTACT US</h2>
                        <ul className={styles.localul}>
                            <li>(925) 854-1766</li>
                            <li>support@fixdapp.com</li>
                            <li>999 Peachtree St NE Suite 840, Atlanta, GA 30309</li>
                        </ul>
                    </div>
                    <div className={styles.col4}>
                        <h2 className={styles.localh2}>HELP</h2>
                        <ul className={styles.localul}>
                            <li>Help Center</li>
                            <li>Contact Support</li>
                            <li>FIXD app and sensor FAQ</li>
                            <li>Returns and warranty</li>
                            <li>Manage subscription</li>
                        </ul>
                    </div>
                    <div className={styles.col5}>
                        <h2 className={styles.localh2}>LEGAL</h2>
                        <ul className={styles.localul}>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Advertising Disclosure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AaronFooter;
