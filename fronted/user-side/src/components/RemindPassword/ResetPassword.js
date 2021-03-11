import React, {useState} from 'react';


import {Formik, Form, ErrorMessage} from 'formik';

import {Link} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as Yup from 'yup';
import {string as yupString, object as yupObject, ref as yupRef} from 'yup';


const useStyles = makeStyles( theme => ({
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
        password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Required'),
        passwordConfirm: yupString().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: yupString().oneOf(
            [yupRef("password")],
            "Passwords must match"
            )
        }).required("Required"),
    });

    const handleSubmit = (values, {setSubmitting}) => {
        // const token = (new URLSearchParams(props.location.search)).get('token');
        // const params = {token, ...values, password_confirmation: values.passwordConfirm};
        // console.log("Submitting");
        // axios.post("/password/reset", params)
        //     .then(res => {
                
        //         if(res.status === 200) {
        //             setPasswordChanged(true)
        //             setRequestError(false);
        //         } else {
        //             setRequestError(true);
        //             setSubmitting(false)
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         setRequestError(true);
        //         setSubmitting(false)
        //     })
    }
    return (
        <div className={classes.root}>
            <h2>Reset Password</h2>
            {passwordChanged? <Alert severity="success">Password successfully changed! <Link to='/login'>Go back to login page</Link></Alert>: null}
            {requestError? <Alert severity="error">Error occurred! Check that you've entered your email address correctly</Alert>: null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            { ( {handleChange, values, handleBlur, isSubmitting}) => (
                <Form >
                    <FormGroup>
                        <TextField label='Enter your email' name='email' color='primary' variant='outlined' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>}/>
                    </FormGroup>
                    <FormGroup>
                        <TextField variant='outlined' label='New Password' name='password' color='primary' type={showPassword? 'text': 'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}                   
                                edge="end"
                        >{showPassword ? <Visibility />: <VisibilityOff />}</IconButton>
                            </InputAdornment>}}/>
                        <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />
                    </FormGroup>
                    <FormGroup>
                        <TextField variant='outlined' label='Repeat Password' name='passwordConfirm' color='primary' type={showPassword? 'text': 'password'} onChange={handleChange} onBlur={handleBlur} value={values.passwordConfirm} InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}           
                                edge="end"
                        >{showPassword ? <Visibility />: <VisibilityOff />}</IconButton>
                            </InputAdornment>}}/>
                        <ErrorMessage name='passwordConfirm' render={msg => <div className='text-danger'>{msg}</div>} />
                    </FormGroup>

                    <Button type='submit' variant='contained' disabled={isSubmitting} color='default'>
                        Submit
                    </Button>
                </Form>
            )}    
            </Formik>
        </div>
    )
};

