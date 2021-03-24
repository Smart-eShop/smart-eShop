import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(0.2),
    minWidth: 250,
  },
}));


export default function PaymentForm() {
  const classes = useStyles();

  const [printPayment, setPrintPayment] = useState([]);
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



  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Pasirinkite apmokėjimo būdą
      </Typography>
      <div>
        <NativeSelect id='select' variant='standard' className={classes.formControl}>
          {printPayment.map((payment) => (
            <option>{payment.name}</option>
          ))}
        </NativeSelect>

      </div>
    </React.Fragment>
  );
}