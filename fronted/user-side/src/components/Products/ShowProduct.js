import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Image from '../Products/product.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
        marginLeft: '100px',
        marginRight: '100px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    basket: {
        marginTop:'135px',
      
    }

}));

export default function ShowProduct({ item }) {
    console.log(item);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid key={item.id} container spacing={3}>
                <Grid item xs={12} md={5} >
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                             {/* {item.img.map()} */}
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography gutterBottom variant="h5" component="h1">
                    {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                    {item.size}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                    {item.description}
                    </Typography>
                    <Typography >
                    {item.price}
                    </Typography>
                    <Button variant="contained" className={classes.basket}>Dėti į krepšelį</Button>
                </Grid>
            </Grid>
        </div>
    );
}
