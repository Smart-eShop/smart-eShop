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


export default function AddressForm() {


  const classes = useStyles();


  const [printDelivery, setPrintDelivery] = useState([]);
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

  const [deliveryValue, setDeliveryValue] = useState('');

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Pasirinkite pristatymo būdą
      </Typography>

      <div>
        <NativeSelect id='select' variant='standard' className={classes.formControl}>
          {printDelivery.map((delivery) => (
            <option>{delivery.name}</option>
          ))}
        </NativeSelect>

      </div>
    </React.Fragment>
  );
}

