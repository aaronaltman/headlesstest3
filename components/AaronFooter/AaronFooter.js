import React from 'react';
import { CFooter, CContainer, CRow, CCol, CImage, CLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AaronFooter() {
    return (
        <CFooter className="py-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <CContainer>
                <CRow>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <CImage
                            fluid
                            src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                            style={{ width: '50%', float: 'left' }}
                        />
                    </CCol>
                    <CCol md="9">
                        <CRow>
                            <CCol col="3" md="3" className="mb-3 mb-md-0">
                                <h2>ABOuT</h2>
                                About FIXD
                                Careers
                                Press
                                Reviews
                            </CCol>
                            <CCol col="3" md="3" className="mb-3 mb-md-0">
                                <CLink href="#">Link 2</CLink>
                            </CCol>
                            <CCol col="3" md="3" className="mb-3 mb-md-0">
                                <CLink href="#">Link 3</CLink>
                            </CCol>
                            <CCol col="3" md="3" className="mb-3 mb-md-0">
                                <CLink href="#">Link 4</CLink>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </CContainer>
        </CFooter>
    );
}

export default AaronFooter;


