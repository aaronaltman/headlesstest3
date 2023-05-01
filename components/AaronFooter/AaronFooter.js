import React from 'react';
import { CFooter, CContainer, CRow, CCol, CImage, CListGroup, CListGroupItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AaronFooter() {
    return (
        <CFooter className="py-4" style={{ backgroundColor: '#f5f5f5', paddingTop: '40px', paddingBottom: '40px' }}>
            <CContainer>
                <CRow>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <CImage
                            fluid
                            src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                            style={{ width: '50%', float: 'left' }}
                        />
                    </CCol>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <h2>ABOUT</h2>
                        <CListGroup flush>
                            <CListGroupItem>About FIXD</CListGroupItem>
                            <CListGroupItem>Careers</CListGroupItem>
                            <CListGroupItem>Press</CListGroupItem>
                            <CListGroupItem>Reviews</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <h2>CONTACT US</h2>
                        <CListGroup flush className="bg-light">
                            <CListGroupItem>(925) 854-1766</CListGroupItem>
                            <CListGroupItem>support@fixdapp.com</CListGroupItem>
                            <CListGroupItem>999 Peachtree St NE Suite 840, Atlanta, GA 30309</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <h2>HELP</h2>
                        <CListGroup flush>
                            <CListGroupItem>Help Center</CListGroupItem>
                            <CListGroupItem>Contact Support</CListGroupItem>
                            <CListGroupItem>FIXD app and sensor FAQ</CListGroupItem>
                            <CListGroupItem>Returns and warranty</CListGroupItem>
                            <CListGroupItem>Manage subscription</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol col="3" md="3" className="mb-3 mb-md-0">
                        <h2>LEGAL</h2>
                        <CListGroup flush>
                            <CListGroupItem>Terms of Use</CListGroupItem>
                            <CListGroupItem>Privacy Policy</CListGroupItem>
                            <CListGroupItem>Advertising Disclosure</CListGroupItem>
                        </CListGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </CFooter>
    );
}

export default AaronFooter;
