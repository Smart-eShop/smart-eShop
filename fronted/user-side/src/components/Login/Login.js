import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import { loadReCaptcha } from 'react-recaptcha-google';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Image from '../Login/login-bg2.png';
import Box from '@material-ui/core/Box';
import FrontPage from '../FrontPage/FrontPage';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#eeeeee",
    paddingRight: '4em',
    paddingLeft: '4em',
    paddingBottom: '4em',
    paddingTop: '5em',
    marginBottom: '3em',
    borderRadius: '1.5%',
  },
  avatar: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  box: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // opacity: '0.9',
    height: '1054px',
    paddingTop: '7em',

  }

}));

export default function Login() {



  const classes = useStyles();
  const [redir, setRedir] = useState(false);
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');


  const loginFetch = e => {
    console.log("labas")
    fetch(`https://eshopsmart.herokuapp.com/api/login?name=${passwordInput}&password=${usernameInput}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    }
    )
      .then(data => data.json())
      .then(data => JSON.parse(JSON.stringify(data.access_token)))
      .then(data => localStorage.setItem('access_token', data))
      .then(setRedir(true))
  }

  const { handleSubmit, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().max(10, 'Vartotojo vardas turi būti trumpesnis nei 10 simbolių').required('Privaloma *'),
      password: Yup.string().min(6, 'Slaptažodis turi būti ilgesnis nei 6 simboliai').required()
    }),
    onSubmit: ({ username, password }) => {
      alert("Jūs sėkmingai prisijungėte")
    }
  })

  if (redir) {
    return (<FrontPage />)
  }

  return (
    <Box className={classes.box}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.large} />
          <form className={classes.form} onSubmit={handleSubmit} >
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              margin="normal"
              value={passwordInput} onInput={e => setPassword(e.target.value)}
              required
              fullWidth
              id="username"
              label="Vartotojo vardas"
              name="username"
              autoComplete="username"
              autoFocus
            />


            {touched.username && errors.username ? (
              <div>{errors.username}</div>
            ) : null}
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              margin="normal"
              value={usernameInput} onInput={e => setUsername(e.target.value)}
              required
              fullWidth
              name="password"
              label="Slaptažodis"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Prisiminti mane"
            />
            <Grid item xs>
              <Link href="/remind-password" variant="body2">
                Pamiršote slaptažodį?
                  </Link>
            </Grid>
            <Button
              onClick={loginFetch}
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
            >

              Prisijungti
              </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Neturite paskyros? Registruotis"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Box>
  );
}
