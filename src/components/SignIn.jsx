import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

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


const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;