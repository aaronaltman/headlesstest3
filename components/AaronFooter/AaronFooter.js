import React from 'react';
import Paper from '@mui/material/Paper';
import 'components/AaronFooter/AaronFooter.module.scss';
import Grid from '@mui/material/Grid';


const AaronFooter = () => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
            }}
        >
            <div className={'localcontainer'}>
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
            </div>
        </Paper>
    );
};

export default AaronFooter;
