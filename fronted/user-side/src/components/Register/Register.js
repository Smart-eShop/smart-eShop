import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Image from '../Register/register-img.jpg';
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {ErrorMessage} from 'formik';

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

  const {handleSubmit, handleChange, values, touched, errors, setFieldValue,  handleBlur} = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().max(10, 'Username must be shorter than 10 characters').required('Required'),
      firstName: Yup.string().max(10, 'Username must be shorter than 10 characters').required('Required'),
      lastName: Yup.string().max(10, 'Username must be shorter than 10 characters').required('Required'),
      email:  Yup.string().email('Invalid email').required('Required'),
      address: Yup.string().max(10, 'Username must be shorter than 10 characters').required('Required'),
      password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
    }),
    onSubmit: ({username, firstName, lastName, email, address, password}) => {
      alert("You have successfully created account");
    }
  })

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
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
                 {touched.username && errors.username ? (
        <div>{errors.username}</div>
      ): null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
                 {touched.firstName && errors.firstName ? (
        <div>{errors.firstName}</div>
      ): null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
                 {touched.lastName && errors.lastName ? (
        <div>{errors.lastName}</div>
      ): null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                 {touched.email && errors.email ? (
        <div>{errors.email}</div>
      ): null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label=" Address"
                  name="address"
                  autoComplete="address"
                />
                {touched.address && errors.address ? (
        <div>{errors.address}</div>
      ): null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                  variant="outlined"
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
      ): null}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="default" />}
                  label="By clicking Sign Up, you agree to our"
                />
                <Link href="/terms-conditions">
   <span className={classes.terms}>Terms and Conditions</span>
  </Link>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <ReCAPTCHA 
sitekey="Your client site key"
onChange={(response) => setFieldValue("recaptcha", response)}
/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
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
