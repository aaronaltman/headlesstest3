import React from 'react';
import Grid from '@mui/material/Grid';
import 'components/AaronFooter/AaronFooter.module.scss';

const AaronFooter = () => {
    return (
        <Grid container style={{ width: 1200 }}>
            <Grid item xs={3} style={{ backgroundColor: 'red', height: 100 }}>
                Column 1
            </Grid>
            <Grid item xs={3} style={{ backgroundColor: 'blue', height: 100 }}>
                Column 2
            </Grid>
            <Grid item xs={3} style={{ backgroundColor: 'green', height: 100 }}>
                Column 3
            </Grid>
            <Grid item xs={3} style={{ backgroundColor: 'orange', height: 100 }}>
                Column 4
            </Grid>
            <Grid item xs={12} style={{ backgroundColor: 'pink', height: 100 }}>
                Column 5
            </Grid>
        </Grid>
    );
};

export default AaronFooter;
