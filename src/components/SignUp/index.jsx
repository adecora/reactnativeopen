import React from 'react';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SignUpForm from './SignUpForm';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
    username: '',
    password: '',
    confirmation: '',
};

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, 'Username too short')
        .max(30, 'Username too short')
        .required('Username is required'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(50, 'Password must be at most 50 characters long')
        .required('Password is required'),
    confirmation: Yup
        .string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});

const SignUp =  () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async(values) => {
        const { username, password } = values;
        
        try {
            const { createUser: { username: registeredUser} } = await  signUp({username, password});
            await signIn({ username: registeredUser, password });
            navigate('/', { replace: true });
        } catch(e) {
            console.log('error', e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;