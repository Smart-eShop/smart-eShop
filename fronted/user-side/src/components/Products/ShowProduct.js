import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router";

const useStyles = makeStyles(theme => ({
    con: {
        marginTop: "500px"
    },
}));

const ShowProduct = ({item}) => {
    const {id} = useParams();
    console.log(item);
    console.log('show product');
    const classes = useStyles();
    return (
        <>
            <Grid item>
                <h3>Prekė</h3>
            </Grid>
            <Grid container item justify="space-between" className="mt-5 bg-warning">

                <Grid key={item.id} item xs={12} md={5}>
                    <Grid container item direction='column' align="center" className="p-4 bg-danger mt-5">
                        <Grid item className="text">
                            {/* {item.img.map()} */}
                            <h1 className="text-dark">{item.title}</h1>
                            <h1>{item.description}</h1>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ShowProduct;