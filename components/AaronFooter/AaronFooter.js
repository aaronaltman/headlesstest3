import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system'; // import styled from @mui/system
import 'components/AaronFooter/AaronFooter.module.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AaronFooter = () => {
    return (
        <div className={'localcontainer'}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        </div>
    );
};

export default AaronFooter;
