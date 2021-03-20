import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    pageTtitle: {
        marginTop: '100px',
        marginBottom: '50px',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(10),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '40%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    discount: {
        color: '#e64a19',
    }
}));


const  Products = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    const printItems = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/items';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        setItems(data.items);
    }

    useEffect(() => {
        printItems();
    }, []);

    const imgUrl = 'https://eshopsmart.herokuapp.com/images/'
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Typography variant='h3' align="center" className={classes.pageTtitle} gutterBottom>Prekių
                    katalogas</Typography>
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {items.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card className={classes.item}>
                                <img
                                    src={imgUrl + item.img[1]}/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h1">
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        {item.price} €
                                    </Typography>
                                    <Typography className={classes.discount}>
                                        - {item.discount}%
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Link to={`/products/${item.id}`}>Peržiūrėti</Link> */}
                                    <Button href={`/products/${item.id}`} size="small" color="primary">
                                        Peržiūrėti
                                    </Button>
                                    <Button size="small" color="primary">
                                        Pirkti
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Products;