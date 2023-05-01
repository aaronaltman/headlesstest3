import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import Image from 'next/image';

function AaronFooter() {
    return (
        <Box component="footer" bgcolor="#333" color="#fff" py={4}>
            <Container maxWidth={false} disableGutters>
                <Container maxWidth="lg">
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <div style={{ marginBottom: '1rem', position: 'relative', width: '100%', height: 'auto' }}>
                                <Image
                                    src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                                    alt="Logo"
                                    layout="responsive"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>Column 1</div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div>Column 2</div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div>Column 3</div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div>Column 4</div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div>Column 5</div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Box>
    );
}

export default AaronFooter;
