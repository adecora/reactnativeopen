import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from '../TextInput';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    errorText: {
        marginTop: -10,
        marginBottom: 15,
        color: theme.colors.error,
    },
    errorInput: {
        borderColor: theme.colors.error,
    }
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    const inputStyle = showError && styles.errorInput;

    return (
        <>
            <TextInput
                style={inputStyle}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;