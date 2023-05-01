import React from 'react';
import { CFooter, CContainer, CRow, CCol, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AaronFooter() {
    return (
        <CFooter className="py-4">
            <CContainer>
                <CRow>
                    <CCol col="12" md="3" className="mb-3 mb-md-0">
                        <CImage fluid src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp" style={{ width: '50%', float: 'left' }} />
                    </CCol>
                    <CCol col="6" md="3" className="mb-3 mb-md-0">Column 2</CCol>
                    <CCol col="6" md="3" className="mb-3 mb-md-0">Column 3</CCol>
                    <CCol col="6" md="3" className="mb-3 mb-md-0">Column 4</CCol>
                </CRow>
            </CContainer>
        </CFooter>
    );
}

export default AaronFooter;

