import React, { useState } from 'react';

import { Formik, Form, ErrorMessage } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import { string as yupString, object as yupObject } from 'yup';


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

const RemindPassword = () => {
    const classes = useStyles();

    const [emailSent, setEmailSent] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const initialValues = {
        email: ''
    };

    const validationSchema = yupObject({
        email: yupString().email("Invalid email address").required("Enter your email")
    });


    return (
        <div className={classes.root}>
            <h2>Forgot Password</h2>
            <h5>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h5>
            {emailSent ? <Alert severity="success">Instruction successfully sent!</Alert> : null}
            {requestError ? <Alert severity="error">Error occurred! Make sure you've entered your email address correctly </Alert> : null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
            // onSubmit={handleSubmit}
            >
                {({ handleChange, values, handleBlur, isSubmitting }) => (
                    <Form >
                        <FormGroup>
                            <TextField name='email' label='Email' color='primary' variant='outlined' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            <ErrorMessage name='email' render={msg => <div className="text-danger">{msg}</div>} />
                        </FormGroup>
                        <Button type='submit' fullWidth variant='contained' disabled={isSubmitting} color='default'>
                            Submit
                    </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Rememeber your password?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default RemindPassword;