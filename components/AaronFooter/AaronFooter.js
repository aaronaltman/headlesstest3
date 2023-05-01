import React from 'react';
import 'components/AaronFooter/AaronFooter.module.scss';
import Grid from '@mui/material/Grid';


const AaronFooter = () => {
    return (
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
    );
};

export default AaronFooter;
