import React, {useState, useEffect} from 'react';
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

      <div className={classes.root}>
      <FormControl component="fieldset">
          {printPayment.map((payment) => (
            <RadioGroup aria-label="payment" name="payment" >
              <FormControlLabel value="payment" control={<Radio />} label={payment.name} />
            </RadioGroup>
          ))}
        </FormControl>
      </div>
    </React.Fragment>
  );
}