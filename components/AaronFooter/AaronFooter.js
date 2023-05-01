import React from 'react';
import { CContainer, CRow, CCol, CFooter } from '@coreui/react';
import Image from 'next/image';

function AaronFooter() {
    return (
        <CFooter>
            <CContainer>
                <CRow>
                    <CCol sm="auto">
                        <Image
                            src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                            alt="Logo"
                            layout="responsive"
                            width={150}
                            height={50}
                        />
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
