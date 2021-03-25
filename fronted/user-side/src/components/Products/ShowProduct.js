import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "200px",
        marginBottom: "100px",
        marginLeft: "100px",
        marginRight: "100px",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        width: "100%", // 16:9
        height: "100%",
    },
    discount: {
        color: "#e64a19",
    },
}));


const ShowProduct = ({ match, addCart }) => {
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

    console.log(item.img);

    return (
        <>

            <div className={classes.root}>
                <Grid key={item.id} container spacing={3}>
                    <Grid item xs={12} md={6} >
                        <Paper className={classes.paper}>
                            <Card className={classes.card}>
                                {(item.img?.length) ?
                                    <Carousel>
                                        {
                                            item.img.map(a => (
                                                <img src={imgUrl + a} alt="nuotrauka" style={{ height: "500px" }} className={classes.cardMedia} />))}
                                    </Carousel>
                                    : false}
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h5" component="h1">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            Dydis: {item.size}
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                            Aprašymas: {item.description}
                        </Typography>
                        <Typography >
                            € {item.price}
                        </Typography>
                        <Typography className={classes.discount}>
                            - {item.discount}%
                                    </Typography>
                        <Button onClick={() => addCart(item)} size="small" color="primary" className={classes.basket}>Dėti į krepšelį</Button>
                        <Button href={`/products`} className={classes.basket}>Atgal</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ShowProduct;
