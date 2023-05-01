import React from 'react';
import Image from 'next/image';
import styles from 'components/AaronFooter/AaronFooter.module.scss';
import Link from 'next/link';

function AaronFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column1}>
                        <div className={styles.logocontainer}>
                            <div className={styles.logo}>
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
                        <h2 className={styles.local_h2}>About</h2>
                        <ul className={styles.local_ul}>
                            <li className={styles.local_li}>About FIXD</li>
                            <li className={styles.local_li}>Careers</li>
                            <li className={styles.local_li}>Press</li>
                            <li className={styles.local_li}>Reviews</li>
                        </ul>
                    </div>
                    <div className={styles.column3}>
                        <h2 className={styles.local_h2}>Contact Us</h2>
                        <ul className={styles.local_ul}>
                            <li className={styles.local_li}>(925) 854-1766</li>
                            <li className={styles.local_li}>support@fixdapp.com</li>
                            <li className={styles.local_li}>999 Peachtree St NE Suite 840, Atlanta, GA 30309</li>
                        </ul>
                    </div>
                    <div className={styles.column4}>
                        <h2 className={styles.local_h2}>Help</h2>
                        <ul className={styles.local_ul}>
                            <li className={styles.local_li}>Help Center</li>
                            <li className={styles.local_li}>Contact Support</li>
                            <li className={styles.local_li}>FIXD app and sensor FAQ</li>
                            <li className={styles.local_li}>Returns and warranty</li>
                            <li className={styles.local_li}>Manage subscription</li>
                        </ul>
                    </div>
                    <div className={styles.column5}>
                        <h2 className={styles.local_h2}>Legal</h2>
                        <ul className={styles.local_ul}>
                            <li className={styles.local_li}>Terms of Use</li>
                            <li className={styles.local_li}>Privacy Policy</li>
                            <li className={styles.local_li}>Advertising Disclosure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AaronFooter;
