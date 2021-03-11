
import React, {useState} from 'react';

import {Formik, Form, ErrorMessage} from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

import {string as yupString, object as yupObject} from 'yup';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *, & > form > *': {
            marginBottom: theme.spacing(3)
        },
        padding: '20px',
        marginTop: '10em',
        width: '100%',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            width: '500px'
        }
    }
}))

export default function RemindPassword() {
    const classes = useStyles();
    const [emailInput, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const initialValues = {
        email: ''
    };

    const validationSchema = yupObject({
        email: yupString().email("Invalid email").required("Required")
    });

    const passwFetch = e => {
        console.log('lalala');
           fetch(`https://eshopsmart.herokuapp.com/api/password/email?email=${emailInput}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
      )
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if(res.status === 200) {
            setEmailSent(true);
            setRequestError(false);
        } else {
            setRequestError(true);
            setEmailSent(false);
        }
    })
    .catch(err => {
        setRequestError(true);
        setEmailSent(false);
    })
    
    
    }
    return (
        <div className={classes.root}>
           <h2>Forgot Password</h2>
           <h5>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h5>
            {emailSent? <Alert severity="success">We have emailed your password reset link!</Alert>: null}
            {requestError? <Alert severity="error">We can't find a user with that email address.</Alert>: null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
               
            >
            { ( {handleChange, handleBlur, isSubmitting, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <TextField name='email' label='Email Address' color='primary' variant='outlined' onChange={handleChange} onBlur={handleBlur}  value={emailInput} onInput={e => setEmail(e.target.value)}  fullWidth />
                        {/* <ErrorMessage name='email' render={msg => <div className="text-danger">{msg}</div>} /> */}
                    </FormGroup>
                    <Button type='submit' fullwidth variant='contained' disabled={isSubmitting} color='default' className={classes.submit} onClick={passwFetch}>
                        Submit
                    </Button>
                </Form>
            )}    
            </Formik>
        </div>
    )
};