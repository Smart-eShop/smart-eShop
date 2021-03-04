import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import './login.css';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#eeeeee",
    paddingRight: '4em',
    paddingLeft: '4em',
    paddingBottom: '4em',
    paddingTop: '4em',
    marginBottom: '3em',
    borderRadius: '1.5%',
  },
  avatar: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));


export default function Login() {
  const classes = useStyles();

  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        validationSchema: Yup.object({
          username: Yup.string().max(10, 'Username must be shorter than 10 characters').required('Required'),
          password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
        }),
        onSubmit: ({username, password}) => {
          alert("You have successfully logged in");
        }
      })

  return (
    <div className="loginBg">
      <Container component="main" maxWidth='xs' className={classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.large}  />
        <form className={classes.form} onSubmit={handleSubmit} >
          <TextField
           onChange={handleChange}
           onBlur={handleBlur}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
           {touched.username && errors.username ? (
        <div>{errors.username}</div>
      ): null}
          <TextField
        value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
            variant="outlined"
            margin="normal"
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

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
           <Grid item xs>
              <Link href="/remind-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Sign In
          </Button>
    
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
    
  );
}
