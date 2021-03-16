import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Image from '../Products/product.jpg';

const useStyles = makeStyles(theme => ({
    con: {
        marginTop: "500px"
    },
}));

export default function ShowProduct({item}) {
 const classes = useStyles();

  return (
    <>
    <Grid item>
        <h3>Prekė</h3>
    </Grid>
    <Grid container item justify="space-between">

        <Grid key={item.id} item xs={12} md={5} >
            <Grid container item direction='column' align="center" className="p-4 bg-danger mt-5">
                <Grid item className="text">
                    <h2 className="text-dark">{item.title}</h2>                                
                    <p>{item.description}</p>
                </Grid>
            </Grid>
        </Grid>
   
    </Grid>
</>
  );
}
