import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function AaronFooter() {
    return (
        <Box component="footer" bgcolor="#333" color="#fff" py={4}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
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
        </Box>
    );
}

export default AaronFooter;
