import React from 'react';
import { CFooter, CContainer, CRow, CCol, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AaronFooter() {
    return (
        <CFooter>
            <CContainer>
                <CRow>
                    <CCol sm="auto">
                        <CImage fluid src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp" />
                    </CCol>
                    <CCol sm="auto">Column 2</CCol>
                    <CCol sm="auto">Column 3</CCol>
                    <CCol sm="auto">Column 4</CCol>
                    <CCol sm="auto">Column 5</CCol>
                </CRow>
            </CContainer>
        </CFooter>
    );
}

export default AaronFooter;
