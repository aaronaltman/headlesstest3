import React from 'react';
import { CFooter, CLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Image from 'next/image';

function AaronFooter() {
    return (
        <CFooter>
            <div className="row">
                <div className="col-md-2">
                    <Image
                        src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                        alt="Logo"
                        layout="responsive"
                        width={150}
                        height={50}
                    />
                </div>
                <div className="col-md-2">
                    <CLink href="#">Column 2</CLink>
                </div>
                <div className="col-md-2">
                    <CLink href="#">Column 3</CLink>
                </div>
                <div className="col-md-2">
                    <CLink href="#">Column 4</CLink>
                </div>
                <div className="col-md-2">
                    <CLink href="#">Column 5</CLink>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>&copy; 2023 creativeLabs. All rights reserved.</p>
                </div>
            </div>
        </CFooter>
    );
}

export default AaronFooter;
