import React from 'react';
import 'components/FixdappFooter/FixdAppFooter.module.scss';
import Image from 'next/image';

function FixdAppFooter() {
    return (
        <footer className="fixd-footer">
            <div className="container">
                <div className="columns">
                    <div className="column logo">
                        <Image
                            src="https://www.fixdapp.com/wp-content/themes/fixd2.0/assets/images/fixd-logo-white.svg"
                            alt="Fixd Logo"
                            width={160}
                            height={48}
                        />
                    </div>
                    <div className="column">
                        <h3>About</h3>
                        {/* Add the respective links to the list items */}
                        <ul>
                            <li>About FIXD</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>(888) 917-8817</li>
                            <li>support@fixdapp.com</li>
                            <li>120 Ottley Dr NE, Suite 100, Atlanta, GA 30324</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Help</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Support</li>
                            <li>FIXD App & Sensor FAQ</li>
                            <li>Returns & Warranty</li>
                            <li>Manage Subscription</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Advertising Disclosure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FixdAppFooter;
