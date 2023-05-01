import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from 'components/AaronFooter/AaronFooter.module.scss';

function AaronFooter() {
    return (
        <Box component="footer" bgcolor="#333" color="#fff" py={4}>
            <div className={styles.footerContainer}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{ marginBottom: '1rem', position: 'relative', width: '100%', height: 'auto' }}>
                            <Image
                                src="https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                                alt="Logo"
                                layout="responsive"
                                width={150}
                                height={50}
                            />
                        </div>
                        <Typography variant="h6">Column 1</Typography>
                        {/* Add content for column 1 */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Column 2</Typography>
                        {/* Add content for column 2 */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Column 3</Typography>
                        {/* Add content for column 3 */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Column 4</Typography>
                        {/* Add content for column 4 */}
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}

export default AaronFooter;

