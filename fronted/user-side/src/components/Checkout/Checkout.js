import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
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
            marginBottom: theme.spacing(6),
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
        margin: theme.spacing(0.5),
        minWidth: 250,
    },
}));


export default function Checkout() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [printPayment, setPrintPayment] = useState([]);
    const [paymentId, setPaymentId] = useState(0);
    // const [deliveryValue, setDeliveryValue] = useState('');
    const [printDelivery, setPrintDelivery] = useState([]);

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

                    
                    <React.Fragment>
                        <Typography variant="subtitle1">
                            Pasirinkite apmokėjimo būdą</Typography>
                        <div>
                            <NativeSelect id='select' variant='standard' className={classes.formControl} value={paymentId} onChange={(e) => setPaymentId(e.target.value)}>
                                {printPayment.map((payment) => (

                                    <option value={payment.id}>{payment.name}</option>
                                ))}
                            </NativeSelect>
                        </div>
                    </React.Fragment>


                    <React.Fragment>
                        <Typography variant="subtitle1">
                            Pasirinkite pristatymo būdą</Typography>
                        <div>
                            <NativeSelect id='select' variant='standard' className={classes.formControl}>
                                {printDelivery.map((delivery) => (

                                    <option>{delivery.name}</option>
                                ))}
                            </NativeSelect>
                        </div>
                    </React.Fragment>


                    <React.Fragment>
                        <div className={classes.buttons}>
                            <Button variant="contained" color="primary" className={classes.button}>Pateikti užsakymą</Button>
                        </div>
                    </React.Fragment>


                </Paper>

            </main>
        </React.Fragment>
    );
}