import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



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
    const [filter, setFilter] = useState("");

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

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };


    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem("cartItems");
        return localData ? JSON.parse(localData) : [];
    });
    const [cartPriceBeforeTax, setCartPriceBeforeTax] = useState(() => {
        const localData = localStorage.getItem("cartPriceBeforeTax");
        return localData ? JSON.parse(localData) : "";
    });
    const [cartTaxes, setCartTaxes] = useState(() => {
        const localData = localStorage.getItem("cartTaxes");
        return localData ? JSON.parse(localData) : "";
    });
    const [cartTotalPrice, setCartTotalPrice] = useState(() => {
        const localData = localStorage.getItem("cartTotalPrice");
        return localData ? JSON.parse(localData) : "";
    });
    const [totalQuantity, setTotalQuantity] = useState(() => {
        const localData = localStorage.getItem("totalQuantity");
        return localData ? JSON.parse(localData) : "";
    });

    const addCart = (item) => {
        const itemsPriceBeforeTaxes = cartItems.reduce((a, c) => a + ((c.price*79)/100) * c.quantity, 0);
        setCartPriceBeforeTax(itemsPriceBeforeTaxes);
        const taxes = cartItems.reduce((a, c) => a + ((c.price*21)/100) * c.quantity, 0);
        setCartTaxes(taxes);
        const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
        setCartTotalPrice(totalPrice);
        const totalQuantity = cartItems.reduce((a, c) => a + c.quantity, 0);
        setTotalQuantity(totalQuantity);
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
        localStorage.setItem("cartPriceBeforeTax", JSON.stringify(cartPriceBeforeTax))
        localStorage.setItem("cartTaxes", JSON.stringify(cartTaxes))
        localStorage.setItem("cartTotalPrice", JSON.stringify(cartTotalPrice))
        localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        // addToCart();
    }, [cartItems]);
    console.log(cartItems);

    const sendCart = async () => {
            const url = `http://smart.test/api/cart/add?cart=${cartItems}&price_before_taxes=${cartPriceBeforeTax}&taxes=${cartTaxes}&total_price=${cartTotalPrice}&total_quantity=${totalQuantity}`;
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

    useEffect(() => {
        sendCart();
    }, []);


    // const addToCart = async (id) => {
    //     const url = `https://eshopsmart.herokuapp.com/api/cart/add-to-cart/${id}`;
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         const data = await response.json();
    //
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
                <div style ={{ width: 300 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={items.map((item) => item.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Prekių paieška"
                                margin="normal"
                                variant="outlined"
                                onChange={handleSearchChange}
                                
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                        )}
                    />
                </div>
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {items.map((item) => (
                        item.title.includes(filter) &&
                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card className={classes.cardMedia}>
                                <img
                                    src={imgUrl + item.img[0]} alt="nuotrauka" style={{width: "500px", height: "200px"}} />
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
                    <Button onClick={sendCart}>Checkout</Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Products;