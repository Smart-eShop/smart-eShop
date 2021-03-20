import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router";

const useStyles = makeStyles(theme => ({
    con: {
        marginTop: "500px"
    },
}));

const ShowProduct = ({match}) => {
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
                            <p>Kaina: {item.price} eur</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ShowProduct;