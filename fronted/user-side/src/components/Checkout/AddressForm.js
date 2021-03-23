import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

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
  const handleChange = (event) => {
    setDeliveryValue(event.target.value);
  };


  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Pasirinkite pristatymo būdą
      </Typography>

      {/* <div className={classes.root}>
        <div>
          {printDelivery.map((delivery) => (
            <p>{delivery.name}</p>
          ))}
        </div> 
</div> */}

        <FormControl component="fieldset">
          {printDelivery.map((delivery) => (
            <RadioGroup aria-label="delivery" name="delivery" value="delivery" >
              <FormControlLabel value="delivery" control={<Radio onChange={handleChange}/>} label={delivery.name} />
            </RadioGroup>
          ))}
        </FormControl>
    </React.Fragment>
  );
}