import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import{ makeStyles }from '@material-ui/core/styles';
import Image from '../Register/register-img.jpg';
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ErrorMessage } from 'formik';


function onChange(value) {
  console.log("Captcha value:", value);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: "2em",
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

  const registerFetch = e => {
    
    console.log("testas")

    fetch(`https://eshopsmart.herokuapp.com/api/register?name=${usernameInput}&email=${emailInput}&first_name=${firstNameInput}&last_name=${lastNameInput}&password=${passwordInput}`, {
      method: "POST",
    }
    )
      .then(response => response.json())
     
      .then(json => console.log(json));
  }

  // const recaptchaRef = React.createRef();


  const { handleSubmit, reset, handleChange, values, touched, errors, setFieldValue, handleBlur,  } = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',

    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, 'Username must be shorter than 15 characters').required('Required'),
      firstName: Yup.string().max(20, 'First Name can not be longer than 20 characters').required('Required'),
      lastName: Yup.string().max(20, 'Last Name can not be longer than 20 characters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Required'),
      // recaptcha: Yup.string().nullable().required("Required")
    }),
    onSubmit: ({username, password, firstName, lastName, email}) => { 
      alert("Account successfully created!")
    }
  }
  )
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <form className={classes.form}  onSubmit={handleSubmit}>
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
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                  label="First Name"
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
                  label="Last Name"
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
                  label="Email Address"
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
                  label="Password"
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
            <Grid item xs={12}><h5 className="text-center mt-5">By clicking Sign Up, you agree to our  <Link href="/terms-conditions">
              <span className={classes.terms}>Terms and Conditions</span>
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
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
