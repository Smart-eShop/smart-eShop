import React, { useState } from 'react';


import { Formik, Form, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';

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
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [requestError, setRequestError] = useState(false);
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
        email: yupString().email("Neteisingas el. pašto adresas").required("Privaloma *"),
        password: Yup.string().min(8, 'Slaptažodis turi būti ilgesnis nei 8 simboliai').required('Privaloma *'),
        passwordConfirm: yupString().when("Slaptažodis", {
            is: val => (val && val.length > 0 ? true : false),
            then: yupString().oneOf(
                [yupRef("Slaptažodis")],
                "Slaptažodžiai turi sutapti"
            )
        }).required("Privaloma *"),
    });

    const handleSubmit = (props, values, { setSubmitting }) => {
        const token = (new URLSearchParams(props.location.search)).get('token');
        const params = { token, ...values, password_confirmation: values.passwordConfirm };

        const confFetch = e => {
            console.log('submitting');
            fetch(`https://eshopsmart.herokuapp.com/api/password/reset?email=${emailInput}&password=${passwordInput}&password_confirmation=${passwordConfirmInput}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            )
                .then(res => {

                    if (res.status === 200) {
                        setPasswordChanged(true)
                        setRequestError(false);
                    } else {
                        setRequestError(true);
                        setSubmitting(false)
                    }
                })
                .catch(err => {
                    console.log(err);
                    setRequestError(true);
                    setSubmitting(false)
                })

        }
        return (
            <div className={classes.root}>
                <h2>Reset Password</h2>
                {passwordChanged ? <Alert severity="success">Slaptažodis sėkmingai pakeistas! <Link to='/login'>Grįžkite į prisijungimo puslapį</Link></Alert> : null}
                {requestError ? <Alert severity="error">Įvyko klaida! Patikrinkite, ar teisingai įvedėte savo el. Pašto adresą</Alert> : null}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, values, handleBlur, isSubmitting }) => (
                        <Form >
                            <FormGroup>
                                <TextField label='Įrašykite savo el. paštą' name='email' color='primary' variant='outlined' onChange={handleChange} onBlur={handleBlur} value={emailInput} onInput={e => setEmail(e.target.value)} />
                                <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />
                            </FormGroup>
                            <FormGroup>
                                <TextField variant='outlined' label='Naujas Slaptažodis' name='password' color='primary' type={showPassword ? 'text' : 'password'} onChange={handleChange} onBlur={handleBlur} value={passwordInput} onInput={e => setPassword(e.target.value)} InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton
                                            aria-label="Perjungti slaptažodžio matomumą"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                                    </InputAdornment>
                                }} />
                                <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />
                            </FormGroup>
                            <FormGroup>
                                <TextField variant='outlined' label='Pakartokite slaptažodį' name='passwordConfirm' color='primary' type={showPassword ? 'text' : 'password'} onChange={handleChange} onBlur={handleBlur} value={passwordConfirmInput} onInput={e => setPassword(e.target.value)} InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton
                                            aria-label="Perjungti slaptažodžio matomumą"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                                    </InputAdornment>
                                }} />
                                <ErrorMessage name='passwordConfirm' render={msg => <div className='text-danger'>{msg}</div>} />
                            </FormGroup>

                            <Button type='submit' variant='contained' disabled={isSubmitting} color='default' onClick={confFetch}>
                                Pateikti
                    </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
