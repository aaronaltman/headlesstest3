import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const AaronFooter = () => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 1200,
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
    );
};

export default AaronFooter;
