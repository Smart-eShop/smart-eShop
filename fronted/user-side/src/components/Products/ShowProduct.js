import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '200px',
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
        marginTop: '200px',
    },

}));

const ShowProduct = ({ match }) => {
    const classes = useStyles();
    useEffect(() => {
        printSingleItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const printSingleItem = async () => {
        const url = `https://eshopsmart.herokuapp.com/api/item/${match.params.id}`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            const item = data.item;
            console.log(item);
            setItem(item);
        } catch (error) {
            console.log(error);
        }
    }
    const imgUrl = 'https://eshopsmart.herokuapp.com/images/'

    // console.log(item.img);
    // const b = item.img.map(a => {
    //     return <p>{a}</p> 
    // })

    return (
        <>

            <div className={classes.root}>
                <Grid key={item.id} container spacing={3}>
                    <Grid item xs={12} md={6} >
                        <Paper className={classes.paper}>
                            <Card className={classes.card}>
                                {console.log(item.img)}
                                {/* <img width="100" src={imgUrl + item.img[1]} alt="" /> */}
                                {/* {b} */}
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                        <Button href={`/#`} className={classes.basket}>Dėti į krepšelį</Button>
                        <Button href={`/products`} className={classes.basket}>Atgal</Button>
                    </Grid>
                </Grid>
            </div>
            {/* <Grid container item justify="space-between" className={classes.con}>
            <Link to={`/products`}>Atgal</Link>
                <Grid key={item.id} item xs={12} md={5}>
                    <Grid container item direction='column' align="center" className="p-4 bg-danger mt-5">
                        <Grid item className="text"> */}
            {/* {item.img.map()} */}
            {/* <h1 className="text-dark">{item.title}</h1>
                            <h1>{item.description}</h1>
                            <p>Kaina: {item.price} eur</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </>
    );
}

export default ShowProduct;