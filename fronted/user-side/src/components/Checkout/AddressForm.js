import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

export default function AddressForm() {
    const classes = useStyles();
    const [delivery, setItems] = useState([]);
    // const [filter, setFilter] = useState("");

    const printItems = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/delivery/show';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.delivery);
        setItems(data.Delivery);
    }

    useEffect(() => {
        printItems();
    }, []);

   

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Pažymėkite pristatymo būdą
      </Typography>

      <div className={classes.root}>
           {delivery.map((item) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={item.name}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            {item.terms}
            {item.price}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}   
        </div>
    </React.Fragment>
          
    )
}