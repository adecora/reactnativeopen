import React from 'react';
import { useNavigate } from 'react-router-native';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: '',
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    submit: {
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

const SignInForm = ({ onSubmit }) => {

    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Pressable onPress={onSubmit}>
                <Text fontWeight="bold" style={styles.submit}>Sign In</Text>
            </Pressable>
        </View>
    );

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

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const  data  = await signIn({ username, password });
            console.log(data);
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