import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


 
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function PaymentForm() {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Pažymėkite apmokėjimo būdą
      </Typography>

      <div className={classes.root}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            
          </RadioGroup>
        </FormControl>
      </div>
    </React.Fragment>
  );
}