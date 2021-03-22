
import React, { useState, useEffect } from 'react';



import { Formik, Form, ErrorMessage } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as Yup from 'yup';
import { string as yupString, object as yupObject, ref as yupRef } from 'yup';





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
export default function ResetPassword() {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [passwordConfirmInput, setPasswordConfirm] = useState('');

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const initialValues = {
        email: '',
        password: '',
        passwordConfirm: ''
    };

    const validationSchema = yupObject({

        email: yupString().email("Invalid Email").required("Required"),
        password: Yup.string().min(10, 'Slaptažodis turi būti sudarytas iš ne mažiau 8 simbolių').required('Required'),
        passwordConfirm: yupString().when("salptažos", {
            is: val => (val && val.length > 0 ? true : false),
            then: yupString().oneOf(
                [yupRef("password")],
                "Slaptažodžiai turi sutapti"
            )
        }).required("Privalomas laukas"),
    });

    const loc = window.location.href;
    console.log(loc);
    const url = new URL(loc);
    const access_token = new URLSearchParams(url.search).get('token');
    console.log(access_token);

    const [resetMessage, setResetMessage] = useState('');

    const confFetch = async () => {
        const url = `https://eshopsmart.herokuapp.com/api/password/reset?email=${emailInput}&token=${access_token}&password=${passwordInput}&password_confirmation=${passwordConfirmInput}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        if (data.message) {
            setResetMessage(data.message)
        }
    }

    useEffect(() => {
        confFetch();
    }, [])

    return (
        <div className={classes.root}>
            <h2>Atkurkite slaptažodį</h2>
            {resetMessage ? <Alert color="primary" closeButton>{resetMessage}</Alert> : null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ handleChange, values, handleBlur, isSubmitting }) => (
                    <Form >
                        <FormGroup>
                            <TextField label='Įveskite el. pašto adresą' name='email' color='primary' variant='outlined' onChange={handleChange} onBlur={handleBlur} value={emailInput} onInput={e => setEmail(e.target.value)} />
                            <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />
                        </FormGroup>

                        <FormGroup>
                            <TextField variant='outlined' label='Naujas slaptažodis' name='password' color='primary' type={showPassword ? 'text' : 'password'} onChange={handleChange} onBlur={handleBlur} value={passwordInput} onInput={e => setPassword(e.target.value)} InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                                </InputAdornment>
                            }} />
                            <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />
                        </FormGroup>
                        <FormGroup>
                            <TextField variant='outlined' label='Pakartokite slaptažodį' name='passwordConfirm' color='primary' type={showPassword ? 'text' : 'password'} onChange={handleChange} onBlur={handleBlur} value={passwordConfirmInput} onInput={e => setPasswordConfirm(e.target.value)} InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                                </InputAdornment>
                            }} />
                            <ErrorMessage name='passwordConfirm' render={msg => <div className='text-danger'>{msg}</div>} />
                        </FormGroup>

                        <Button type='submit' variant='contained' disabled={isSubmitting} color='default'
                            onClick={confFetch}
                        >
                            Patvirtinti
                    </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
