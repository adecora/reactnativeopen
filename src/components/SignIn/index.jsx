import React from 'react';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, 'Username too short')
        .required('Username is required'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
});

export const SignInContainer = ({ handleSubmit }) => {
    
    const onSubmit = (values) => {
        const { username, password } = values;
        handleSubmit({ username, password });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signIn({ username, password });
            navigate('/', { replace: true });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;