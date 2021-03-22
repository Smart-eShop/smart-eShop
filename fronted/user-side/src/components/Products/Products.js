import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



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
        width: '100%', // 16:9
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

    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem("cartItems");
        return localData ? JSON.parse(localData) : [];
    });

    const addCart = (item) => {

        const exist = cartItems.find((x) => x.id === item.id);
        if(exist && exist.quantity < item.quantity){
            setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, quantity: exist.quantity + 1} : x))
        }else if (exist === undefined){
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }else{
            alert('Atsiprašome, daugiau prekių sandėlyje nėra')
        }
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        // addToCart();
    }, [cartItems]);
    console.log(cartItems);

    // const addToCart = async (id) => {
    //     const url = `https://eshopsmart.herokuapp.com/api/cart/add-to-cart/${id}`;
    //     try {
    //         const response = await fetch(url, {
    //             headers: {
    //                 'method': 'GET',
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         const data = await response.json();
    //         setCartItems([...cartItems, {...data}]);
    //         console.log(cartItems);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    //
    // useEffect(() => {
    //     cart();
    // }, []);
    //
    // const cart = async () => {
    //     const url = `https://eshopsmart.herokuapp.com/api/cart/shopping-cart`;
    //     try {
    //         const response = await fetch(url, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


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
                            <Card className={classes.cardMedia}>
                                <img
                                    src={imgUrl + item.img[0]} style={{width: "500px", height: "200px"}} />
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

                                    <Button onClick={()=> addCart(item)} size="small" color="primary">Į
                                        krepšelį</Button>
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