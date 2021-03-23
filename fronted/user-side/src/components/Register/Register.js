import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../Register/register-img.png';
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Login from '../Login/Login';


function onChange(value) {
  console.log("Captcha value:", value);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '150vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    height: '100%',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: "5em",
    marginBottom: "2em",
    backgroundColor: '#9e9e9e',
    height: '3em',
    width: '3em'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    marginBottom: "1em"
  },
  terms: {
    fontSize: "20px"
  }
}));

export default function Register() {
  const classes = useStyles();
  const [usernameInput, setUsername] = useState('');
  const [firstNameInput, setFirstName] = useState('');
  const [lastNameInput, setLastName] = useState('');
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  // const [redir, setRedir] = useState(false);

  const registerFetch = e => {

    console.log("testas")

    fetch(`https://eshopsmart.herokuapp.com/api/register?name=${usernameInput}&email=${emailInput}&first_name=${firstNameInput}&last_name=${lastNameInput}&password=${passwordInput}`, {
      method: "POST",
    }
    )

      .then(response => response.json())

      .then(json => console.log(json))
      // .then(setRedir(true))
  }

  // const recaptchaRef = React.createRef();


  const { handleSubmit, handleChange, touched, errors, handleBlur, } = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',

    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, 'Vartotojo vardas turi būti trumpesnis nei 15 simbolių').required('Privaloma *'),
      firstName: Yup.string().max(20, 'Vardas negali būti ilgesnis nei 20 simbolių').required('Privaloma *'),
      lastName: Yup.string().max(20, 'Pavardė negali būti ilgesnė nei 20 simbolių').required('Privaloma *'),
      email: Yup.string().email('Neteisingas el. pašto adresas').required('Privaloma *'),
      password: Yup.string().min(8, 'Slaptažodis turi būti ilgesnis nei 8 simboliai').required('Privaloma *'),
      // recaptcha: Yup.string().nullable().required("Required")
    }),
    onSubmit: ({ username, password, firstName, lastName, email }) => {
      alert("Anketa sėkmingai sukurta!")
      window.location.href = "http://localhost:3000/login";
    }

  }
  )

  // if (redir) {
  //   return (<Login />)
  // }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="fname"
                  variant="outlined"
                  value={usernameInput} onInput={e => setUsername(e.target.value)}
                  required
                  fullWidth
                  id="username"
                  label="Vartotojo vardas"
                  name="username"
                  // autoComplete="username"
                />
                {touched.username && errors.username ? (
                  <div>{errors.username}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  value={firstNameInput} onInput={e => setFirstName(e.target.value)}
                  required
                  fullWidth
                  id="firstName"
                  label="Vardas"
                  autoFocus
                />
                {touched.firstName && errors.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  value={lastNameInput} onInput={e => setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Pavardė"
                  name="lastName"
                  autoComplete="lname"
                />
                {touched.lastName && errors.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  value={emailInput} onInput={e => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="El.Paštas"
                  name="email"
                  autoComplete="email"
                />
                {touched.email && errors.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  value={passwordInput} onInput={e => setPassword(e.target.value)}
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
              </Grid>

            </Grid>
            <Grid container justify="center">
              <Grid item>
                <ReCAPTCHA
                  className="mt-5"
                  // ref={recaptchaRef}
                  sitekey={'6Lfm83caAAAAAJAHan8UYBk7zIFi0VuEWJLz_86x'}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}><h5 className="text-center mt-5">Registruodamiesi sutinkate su mūsų <Link href="/terms-conditions">
              <span className={classes.terms}> Apsipirkimo taisyklėmis</span>
            </Link></h5>

            </Grid>
            <Button

              onClick={registerFetch}
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
            //  href="/login"
            >
              Registruotis
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Jau turite paskyrą? Prisijungti
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
