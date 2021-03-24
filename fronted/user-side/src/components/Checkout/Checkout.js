import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import { MenuItem } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(12),
            marginBottom: theme.spacing(8),
            padding: theme.spacing(3),
        },
    },
   
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    formControl: {
        marginTop: theme.spacing(5),
        minWidth: 250,
    },
    formControl2: {
        minWidth: 250,
    },
}));


export default function Checkout({cartPriceBeforeTax, cartTaxes, cartTotalPrice, totalQuantity, cartItems}) {
    // console.log(cartTotalPrice);
    const classes = useStyles();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [printPayment, setPrintPayment] = useState([]);
    const [paymentId, setPaymentId] = useState('');//reikia pakeisti kad imtu is selectu value
    const [deliveryValue, setDeliveryValue] = useState('');
    const [printDelivery, setPrintDelivery] = useState([]);
    const accessToken = localStorage.getItem("access_token");


    const printAllPayments = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/payment/show';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.payment);
        setPrintPayment(data.payment);
    }

    useEffect(() => {
        printAllPayments();
    }, [])

    // console.log(paymentId)
    const printAllDeliveries = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/delivery/show';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Delivery);
        setPrintDelivery(data.Delivery);
    }

    useEffect(() => {
        printAllDeliveries();
    }, [])



const sendCart = async () => {
        const cart = JSON.stringify(cartItems);
        const url = `http://eshopsmart.herokuapp.com/api/order/store?delivery_id=${deliveryValue}&payment_id=${paymentId}
        &cart=${cart}&billing_first_name=${name}&billing_last_name=${lastName}&billing_email=${email}&billing_street_number=
        ${adress}&billing_city=${city}&billing_postcode=${postCode}&total_price_without_tax=${cartPriceBeforeTax}&
        total_taxes=${cartTaxes}&total_price=${cartTotalPrice}&total_quantity=${totalQuantity}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            const data = await response.json();
            console.log(data);
            localStorage.clear();

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        sendCart();
    }, []);





    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Užsakymo patvirtinimas
                    </Typography>
                    <React.Fragment >
                        <Grid container spacing={4} >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Vardas"
                                    fullWidth
                                    autoComplete="given-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Pavardė"
                                    fullWidth
                                    autoComplete="family-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="El. Paštas"
                                    fullWidth
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Adresas"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    value={adress}
                                    onChange={(e) => setAdress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="Miestas"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Pašto kodas"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    value={postCode}
                                    onChange={(e) => setPostCode(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </React.Fragment>

                    
                
                        <Typography variant="subtitle1" className={classes.formControl}>
                            Pasirinkite apmokėjimo būdą</Typography>
                        
                            <select className={classes.formControl2} value={paymentId} onChange={(e) => setPaymentId(e.target.value)}>
                                {printPayment.map((payment) => (
                                    <option value={payment.id}>{payment.name}</option>
                                ))}
                            </select>
                    
                    


                    
                        <Typography variant="subtitle1" className={classes.formControl}>
                            Pasirinkite pristatymo būdą</Typography>
                        
                            <select className={classes.formControl2} value={deliveryValue} onChange={(e) => setDeliveryValue(e.target.value)}>
                                {printDelivery.map((delivery) => (
                                    <option value={delivery.id}>{delivery.name}</option>
                                ))}
                            </select>
                    
                        <div className={classes.buttons}>
                            <Button variant="contained" color="primary" className={classes.button} onClick={sendCart}>Pateikti užsakymą</Button>
                        </div>
                    


                </Paper>

            </main>
        </React.Fragment>
    );
}