import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FixdAppFooter() {
    return (
        <Box component="footer" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={4}>
                    <Item>
                        <Image
                            src="https://www.fixdapp.com/wp-content/themes/fixd2.0/assets/images/fixd-logo-white.svg"
                            alt="Fixd Logo"
                            width={160}
                            height={48}
                            layout="responsive"
                        />
                    </Item>
                </Grid>
                <Grid container xs={12} md={7} lg={8} spacing={4}>
                    <Grid xs={6} lg={3}>
                        <Item>
                            <Box
                                id="about"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                About
                            </Box>
                            <Box component="ul" aria-labelledby="about" sx={{ pl: 2 }}>
                                <li>About FIXD</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Reviews</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <Item>
                            <Box
                                id="contact-us"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Contact Us
                            </Box>
                            <Box component="ul" aria-labelledby="contact-us" sx={{ pl: 2 }}>
                                <li>(888) 917-8817</li>
                                <li>support@fixdapp.com</li>
                                <li>120 Ottley Dr NE, Suite 100, Atlanta, GA 30324</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <Item>
                            <Box
                                id="help"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Help
                            </Box>
                            <Box component="ul" aria-labelledby="help" sx={{ pl: 2 }}>
                                <li>Help Center</li>
                                <li>Contact Support</li>
                                <li>FIXD App & Sensor FAQ</li>
                                <li>Returns & Warranty</li>
                                <li>Manage Subscription</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <Item>
                            <Box
                                id="legal"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Legal
                            </Box>
                            <Box component="ul" aria-labelledby="legal" sx={{ pl: 2 }}>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Advertising Disclosure</li>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FixdAppFooter;
