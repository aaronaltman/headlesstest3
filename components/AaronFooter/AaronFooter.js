import React from 'react';
import Grid from '@mui/material/Grid';
import 'components/AaronFooter/AaronFooter.module.scss';

function AaronFooter() {
    return (
        <div className="footer">
            <div className="container">
                <Grid container className="row">
                    <Grid item xs={12} sm={3} className="col1">
                        {/* Your column 1 content here */}
                    </Grid>
                    <Grid item xs={12} sm={3} className="col2">
                        {/* Your column 2 content here */}
                    </Grid>
                    <Grid item xs={12} sm={3} className="col3">
                        {/* Your column 3 content here */}
                    </Grid>
                    <Grid item xs={12} sm={3} className="col4">
                        {/* Your column 4 content here */}
                    </Grid>
                    <Grid item xs={12} sm={3} className="col5">
                        {/* Your column 5 content here */}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default AaronFooter;
