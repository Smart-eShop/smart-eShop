import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '400px',
  },
});

export default function DetailsForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');

  console.log(name);
  const classes = useStyles();

  return ( 
  
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
  );
}