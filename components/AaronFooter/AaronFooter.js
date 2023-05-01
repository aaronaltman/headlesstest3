import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const AaronFooter = () => {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Paper
                sx={{
                    p: 2,
                    flexGrow: 1,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <p>xs</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>xs=6</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>xs</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>xs</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>xs</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default AaronFooter;
