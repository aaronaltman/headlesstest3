import React from 'react';
import { CFooter, CContainer, CRow, CCol, CImage, CListGroup, CListGroupItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AaronFooter() {
    return (
        <CFooter className="py-5 bg-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <CContainer>
                <CRow display="flex" flex-direction="row" justify-content="space-between">
                    <CCol flex="1">
                        <CImage
                            fluid
                            src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                            style={{ width: '80%', float: 'left' }}
                        />
                    </CCol>
                    <CCol flex="1">
                        <h2 style={{ fontSize: '20px' }}>ABOUT</h2>
                        <CListGroup flush>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>About FIXD</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Careers</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Press</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Reviews</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol flex="1">
                        <h2 style={{ fontSize: '20px' }}>CONTACT US</h2>
                        <CListGroup flush className="bg-light">
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>(925) 854-1766</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>support@fixdapp.com</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>999 Peachtree St NE Suite 840, Atlanta, GA 30309</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol flex="1">
                        <h2 style={{ fontSize: '20px' }}>HELP</h2>
                        <CListGroup flush>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Help Center</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Contact Support</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>FIXD app and sensor FAQ</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Returns and warranty</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Manage subscription</CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol flex="1">
                        <h2 style={{ fontSize: '20px' }}>LEGAL</h2>
                        <CListGroup flush>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Terms of Use</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Privacy Policy</CListGroupItem>
                            <CListGroupItem style={{ backgroundColor: 'var(--bg-light)' }}>Advertising Disclosure</CListGroupItem>
                        </CListGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </CFooter>
    );
}

export default AaronFooter;
